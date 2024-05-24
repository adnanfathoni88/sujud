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
		$with_resi_exists = null;
		$status_pesanan = '';
		$telah_sampai = null;
		$is_confirmed_by_admin = null;

		switch ($request->status) {
			case 'masuk':
				$telah_sampai = false;
				$with_resi_exists = false;
				$is_confirmed_by_admin = false;
				$status_pesanan = 'belum-bayar';
				break;
			case 'belum-bayar':
				$telah_sampai = false;
				$with_resi_exists = false;
				$is_confirmed_by_admin = true;
				$status_pesanan = 'belum-bayar';
				break;
			case 'dibayar':
				$telah_sampai = false;
				$with_resi_exists = false;
				$is_confirmed_by_admin = true;
				$status_pesanan = 'dibayar';
				break;
			case 'sampai':
				$resi = '';
				$telah_sampai = true;
				$with_resi_exists = true;
				$is_confirmed_by_admin = true;
				$status_pesanan = 'dibayar';
				break;
			case 'gagal':
				$telah_sampai = false;
				$with_resi_exists = false;
				$is_confirmed_by_admin = true;
				$status_pesanan = 'failed';
				break;
			case 'pengiriman':
				$telah_sampai = false;
				$with_resi_exists = true;
				$status_pesanan = 'dibayar';
				$is_confirmed_by_admin = true;
				break;
		}

		$data = Ongkir::with('pelanggan:id,nama', 'pesanan_single:pesanan_grup,status,id')
			->whereHas('pesanan', function ($q) use ($status_pesanan) {
				if (!empty($status_pesanan)) {
					$q->where('status', $status_pesanan);
				}
			})
			->where(function ($q) use ($is_confirmed_by_admin) {
				if ($is_confirmed_by_admin !== null) {
					$q->where('is_confirmed_by_admin', $is_confirmed_by_admin);
				}
			})
			->where(function ($q) use ($telah_sampai) {
				if ($telah_sampai !== null) {
					$q->where('telah_sampai', $telah_sampai);
				}
			})
			->where(function ($q) use ($with_resi_exists) {
				if ($with_resi_exists === true) {
					$q->whereNotNull('resi');
				} else {
					$q->whereNull('resi');
				}
			})
			->orderBy('created_at', 'DESC')
			->paginate(15);

		return $this->res($data, 200);
	}

	public function set_resi(Request $request, int $id)
	{
		$validator = Validator::make($request->all(), [
			'resi' => 'nullable|string|max:255',
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$ongkir = Ongkir::where('id', $id)
			->whereNull('resi')
			->where('telah_sampai', false)
			->where('is_confirmed_by_admin', true)
			->whereHas('pesanan', fn ($q) => $q->where('status', 'dibayar'))
			->first();
		if (!$ongkir) return $this->res("Pesanan tidak ditemukan", 404);

		$ongkir->resi = $request->resi;
		$ongkir->save();
		return $this->res("Success", 201);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id)
	{
		$ongkir = Ongkir::where('id', $id)
			->with('pelanggan')
			->with('pesanan.varian.produk')
			->with('pesanan.varian.gambar')
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

		if (!$ongkir) return $this->res("Pesanan sudah dikonfirmasi", 404);
		foreach ($ongkir->pesanan as $pesanan) {
			if ($pesanan->varian->stok < $pesanan->qty) {
				return $this->res("Out of stock", 400);
			}
		}

		$transaksi = Transaksi::where('pesanan_grup', $ongkir->pesanan_grup)->first();
		if (!$transaksi) {
			DB::transaction(function () use ($request, $ongkir) {
				$ongkir->ongkir = $request->ongkir;
				$ongkir->is_confirmed_by_admin = true;
				if ($request->berat) $ongkir->berat = $request->berat;
				if ($request->ekspedisi) $ongkir->ekspedisi = $request->ekspedisi;
				$ongkir->save();
				foreach ($ongkir->pesanan as $pesanan) {
					$pesanan->varian->stok = $pesanan->varian->stok - $pesanan->qty;
					$pesanan->varian->save();
				}
			});
			return $this->res("Success", 200);
		}

		return $this->res("Transaksi sudah dibayar", 400);
	}
}
