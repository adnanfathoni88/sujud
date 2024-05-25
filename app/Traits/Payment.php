<?php

namespace App\Traits;

use Illuminate\Support\Facades\Http;

trait Payment {
    protected function apiPaymentMethod(int $amount) {
		$merchant = config('app.payment_merchant');
		$datetime = now()->format('Y-m-d H:i:s');
		$apikey = config('app.payment_api_key');
		$url = "https://sandbox.duitku.com/webapi/api/merchant/paymentmethod/getpaymentmethod";

		$response = Http::post($url, [
			'amount' => $amount,
			'datetime' => $datetime,
			'merchantcode' => $merchant,
			'signature' => hash('sha256', $merchant . $amount . $datetime . $apikey),
		]);

		return $response->json();
    }

	protected function apiPaymentCheckStatus(string $pesanan_grup) {
		$apiKey = config('app.payment_api_key');
		$merchanCode = config('app.payment_merchant');
		$signature = md5($merchanCode . $pesanan_grup . $apiKey);
		$url = "https://sandbox.duitku.com/webapi/api/merchant/transactionStatus";

		$response = Http::post($url, [
			'signature' => $signature,
			'merchantCode' => $merchanCode,
			'merchantOrderId' => $pesanan_grup,
		]);

		return $response->json();
	}
}