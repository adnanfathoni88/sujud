<?php

namespace App\Http\Controllers\api;

use App\Models\Pesanan;
use App\Models\Varian;
use App\Traits\Payment;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApiPesananController extends Controller
{
	use ResponseFormat, UserCookie, Payment;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
		$status = (function() use($request) {
			$status = $request->status;
			if($status === 'dibayar') return 'dibayar';
			if($status === 'failed') return 'failed';
			return 'belum-bayar';
		})();

		$userId = $this->getUserCookie($request->cookie('token'));
		$m = Pesanan::where('user_id', $userId)
			->where('status', $status)
			->with('varian.gambar')
			->paginate(10)
			->groupBy('pesanan_grup');
		return $this->res($m, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
		function createPesanan($variant_id, int $qty, $pesananGroup, $alamat, $userId, $diskon = 0, $total = 0) {
			return [
				'alamat' => $alamat,
				'pesanan_grup' => $pesananGroup,
				'user_id' => $userId,
				'qty' => $qty,
				"diskon" => $diskon * $qty,
				'varian_id' => $variant_id,
				"total" => ($total * $qty) - ($diskon * $qty),
			];
		}

		function getVariant(Collection $pesanan) {
			return $pesanan->map(fn($p) => $p['varian_id'])->toArray();
		}

		$validator = Validator::make($request->all(), [
			'alamat' => 'required|max:255',
			'pesanan' => 'required|array',
			'pesanan.*.qty' => 'required|numeric|min:1',
			'pesanan.*.varian_id' => 'required|exists:varians,id',
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$alamat = $request->alamat;
		$userId = $this->getUserCookie($request->cookie('token'));
		$pesananCollection = collect($request->pesanan);
		$pesananGroup = Str::uuid()->toString();
		$varians = getVariant($pesananCollection);
		$mVarians = Varian::whereIn('id', $varians)
			->get()
			->map(function($v) use($pesananCollection, $pesananGroup, $alamat, $userId) {
				$pesanan = $pesananCollection->firstWhere('varian_id', $v->id);
				return createPesanan($v->id, $pesanan['qty'], $pesananGroup, $alamat, $userId, $v->harga_diskon, $v->harga);
			});
			
			
		
		try {
			$response = $this->apiPaymentMethod($mVarians->sum('total'));
			
			if(isset($response['responseMessage']) && $response['responseMessage'] === 'SUCCESS') {
				Pesanan::insert($mVarians->toArray());
				return $this->res(['payments' => $response['paymentFee']], 201);	
			} else {
				$message = isset($response['responseMessage']) ? $response['responseMessage'] : $response['Message'];
				return $this->res($message, 400);
			}
		} catch (\Throwable $th) {
			return $this->res($th->getMessage(), 201);
		}
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
		$userId = $this->getUserCookie($request->cookie('token'));

        $m = Pesanan::where('id', $id)
			->where('user_id', $userId)
			->with('varian.gambar', 'varian.produk')
			->first();
		if(!$m) return $this->res("Not Found", 404);

		return $this->res($m, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
		$m = Pesanan::where('id', $id)
			->where('user_id', $this->getUserCookie($request->cookie('token')))
			->where('status', 'belum-bayar')
			->first();

		if(!$m) return $this->res("Not Found", 404);

		$m->delete();

		return $this->res("Success", 201);
    }
}
