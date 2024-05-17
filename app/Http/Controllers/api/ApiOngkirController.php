<?php

namespace App\Http\Controllers\api;

use App\Models\Ongkir;
use App\Models\Pesanan;
use App\Models\Transaksi;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ApiOngkirController extends Controller
{
	use ResponseFormat, UserCookie;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
		$isConfirmed = $request->query('isConfirmed') === 'true';
        $data = Ongkir::where('is_confirmed_by_admin', $isConfirmed)
			->with('pelanggan')
			->paginate(10);
		return $this->res($data, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
		$ongkir = Ongkir::where('id', $id)
			->with('pelanggan')
			->with('pesanan')
			->with('transaksi')
			->first();

		return $this->res($ongkir, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
		$validator = Validator::make($request->all(), [
			'berat' => 'required|numeric|min:0',
			'ongkir' => 'required|numeric|min:0',
			'ekspedisi' => 'nullable|string|max:255',
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 400);
		
		$ongkir = Ongkir::with('pesanan.varian')
			->where('id', $id)
			->where('is_confirmed_by_admin', false)
			->first();

		if(!$ongkir) return $this->res("Pesanan sudah dibayar", 404);
		foreach($ongkir->pesanan as $pesanan) {
			if($pesanan->varian->stok < $pesanan->qty) {
				return $this->res("Out of stock", 400);
			}
		}
		
		$transaksi = Transaksi::where('pesanan_grup', $ongkir->pesanan_grup)->first();
		if(!$transaksi) {
			DB::transaction(function() use($request, $ongkir) {
				$ongkir->ongkir = $request->ongkir;
				$ongkir->is_confirmed_by_admin = true;
				if($request->berat) $ongkir->berat = $request->berat;
				if($request->ekspedisi) $ongkir->ekspedisi = $request->ekspedisi;
				$ongkir->save();
				foreach($ongkir->pesanan as $pesanan) {
					$pesanan->varian->stok = $pesanan->varian->stok - $pesanan->qty;
					$pesanan->varian->save();
				}
			});
			return $this->res("Success", 200);
		}

		return $this->res("Transaksi sudah dibayar", 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $ongkir = Ongkir::find($id);
		$pesanan = Pesanan::where('pesanan_grup', $ongkir->pesanan_grup)->first();
		if(!$pesanan) {
			$ongkir->delete();
			return $this->res("Success", 200);
		}
		return $this->res("Pelanggan belum menghapus pesanannya", 400);
    }
}
