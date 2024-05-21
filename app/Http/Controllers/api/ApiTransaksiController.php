<?php

namespace App\Http\Controllers\api;

use App\Models\Ongkir;
use App\Models\Pesanan;
use App\Models\Transaksi;
use App\Models\User;
use App\Traits\Payment;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class ApiTransaksiController extends Controller
{
	use ResponseFormat, UserCookie, Payment;

	function paymentMethod(Request $request, string $pesanan_group)
	{
		$userId = $this->getUserCookie($request->cookie('token'));
		$ongkir = Ongkir::where('pesanan_grup', $pesanan_group)
			->where('is_confirmed_by_admin', true)
			->first();
		if(!$ongkir) return $this->res("Pesanan belum dikonfirmasi", 404);

		$amount = Pesanan::selectRaw("SUM(total) as total")
			->where('pesanan_grup', $pesanan_group)
			->where("user_id", $userId)
			->first()
			->total;
		$amount += $ongkir->ongkir;
		
		$response = $this->apiPaymentMethod($amount);
		return $this->res($response, 200);
	}

	function transaction(Request $request, string $pesanan_group, string $payment_method)
	{
		$userId = $this->getUserCookie($request->cookie('token'));
		$transaksi = Transaksi::where('pesanan_grup', $pesanan_group)->first();
		if($transaksi) return $this->res("Pesanan sudah dibayar", 400);

		$ongkir = Ongkir::where('pesanan_grup', $pesanan_group)
			->where('is_confirmed_by_admin', true)
			->first();
		if(!$ongkir) return $this->res("Pesanan belum dikonfirmasi", 404);

		$amount = Pesanan::selectRaw("SUM(total) as total")
			->where('pesanan_grup', $pesanan_group)
			->where("user_id", $userId)
			->where("status", "belum-bayar")
			->first()
			->total;
		$amount += $ongkir->ongkir;
		
		if(!$amount) return $this->res("Not Found", 404);
		
		$user = User::find($userId);
		if(!$user) return $this->res("Not Found", 404);

		$customerName = $user->name;
		$customerEmail = $user->email;
		$orderId = Str::uuid()->toString();
		$merchant = config('app.payment_merchant');
		$productDetail = "Pembayaran pesanan kepada SUJUD COMPANY";
		$returnUrl = $request->getSchemeAndHttpHost() . "/api/pesanan/{$pesanan_group}/transaksi/return";
		$callbackUrl = $request->getSchemeAndHttpHost() . "/api/pesanan/{$pesanan_group}/transaksi/callback";
		$signature = md5($merchant . $orderId . $amount . config('app.payment_api_key'));
		$response = Http::post("https://sandbox.duitku.com/webapi/api/merchant/v2/inquiry", [
			"expiryPeriod" => 10,
			"merchantCode" => $merchant,
			"paymentAmount" => $amount,
			"signature" => $signature,
			"email" => $customerEmail,
			"productDetails" => $productDetail,
			"customerVaName" => $customerName,
			"callbackUrl" => $callbackUrl,
			"returnUrl" => $returnUrl,
			"paymentMethod" => $payment_method,
			"merchantOrderId" => $orderId,
		]);

		return $this->res($response->json(), 200);
	}

	function callbackAction(Request $request, string $pesanan_group) 
	{
		/**
		 * dalam melakukan callback action, seharusnya dicek apakah request tersebut valid dari payment gateway atau tidak
		 * karena route ini berada di public route tanpa middleware tambahan
		 * 
		 * mitigasi:
		 * 1. cek signature
		 * 		- saat user melakukan transaksi, signature yang dibuat harus disimpan di database, setelah itu baru dikirim bersama config lain.
		 * 		  sehingga ketika callback dipanggil, dia (payment gateway) akan mengirimkan signature yang sama dengan yang disimpan di database 
		 *        dan kita bisa membandingkan apakah signature yang dikirimkan sama dengan yang disimpan di database. 
		 *        jika tidak sama, maka request tersebut bukan dari payment gateway.
		 * 2. cek domain payment gateway
		 *      - cek apakah request tersebut berasal dari domain payment gateway atau bukan, tapi ini akan rentan jika domain payment gateway di-spoof
		 */
		$status = $request->resultCode; // '00' is success || '01' is failed;
		error_log("CALLBACK CALLED!!");
		if($status === '00') {
			DB::transaction(function() use($pesanan_group, $request) {
				$amount = $request->amount;
				$signature = $request->signature;
				$paymentMethod = $request->paymentCode;
				$merchantOrderId = $request->merchantOrderId;
				// required to save for mitigation
				$reference = $request->reference;
				$publisherOrderId = $request->publisherOrderId;
				$date = $request->settlementDate;

				Pesanan::where('pesanan_grup', $pesanan_group)->update([ 'status' => 'dibayar' ]);
				Transaksi::insert([
					'tgl_bayar' => $date,
					'metode' => $paymentMethod,
					'status' => 'SUCCESS',
					'total' => $amount,
					'pesanan_grup' => $pesanan_group,
					'reference' => $reference,
					'publisher_order_id' => $publisherOrderId,
					'order_id' => $merchantOrderId,
					'signature' => $signature,
					'created_at' => now(),
					'updated_at' => now(),
				]);
			});
			return $this->res("Success", 200);
		} else {
			$amount = $request->amount;
			$signature = $request->signature;
			$paymentMethod = $request->paymentCode;
			$merchantOrderId = $request->merchantOrderId;
			// required to save for mitigation
			$reference = $request->reference;
			$publisherOrderId = $request->publisherOrderId;
			$date = $request->settlementDate;

			Transaksi::insert([
				'tgl_bayar' => $date,
				'metode' => $paymentMethod,
				'status' => 'FAILED',
				'total' => $amount,
				'pesanan_grup' => $pesanan_group,
				'reference' => $reference,
				'publisher_order_id' => $publisherOrderId,
				'order_id' => $merchantOrderId,
				'signature' => $signature,
				'created_at' => now(),
				'updated_at' => now(),
			]);
			return $this->res("Failed", 400);
		}
	}
}
