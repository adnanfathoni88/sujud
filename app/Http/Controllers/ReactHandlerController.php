<?php

namespace App\Http\Controllers;

use App\Models\Pesanan;
use App\Models\Transaksi;
use App\Traits\AuthWeb;
use App\Traits\Payment;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class ReactHandlerController extends Controller
{
	use AuthWeb, Payment;

	public function laporan_transaksi(Request $request)
	{
		$months = [
			'01' => 'Januari',
			'02' => 'Februari',
			'03' => 'Maret',
			'04' => 'April',
			'05' => 'Mei',
			'06' => 'Juni',
			'07' => 'Juli',
			'08' => 'Agustus',
			'09' => 'September',
			'10' => 'Oktober',
			'11' => 'November',
			'12' => 'Desember',
		];

		$token = $request->cookie('token');
		if (!$this->webAuthenticate($token)) return redirect('/login');
		if(!$this->webAuthorization($token, 'admin')) return "Unauthorized Access";

		$year = $request->query('year') ?? date('Y');
		$month = $request->query('month') ?? date('m');

		$transaksi = Transaksi::whereYear('created_at', $year)->whereMonth('created_at', $month)->get();
		$readable_month = $months[$month];
		$total = $transaksi->sum('total');

		return view('laporan-transaksi', compact('transaksi', 'total', 'year', 'month', 'readable_month'));
	}


	public function payment_success(Request $request) 
	{
		$pesanan_grup = $request->query('pesanan_grup');
		if(!$pesanan_grup) return view('payment-status', [ 'error' => true, 'message' => 'Pesanan tidak ditemukan' ]);
		$status = $this->apiPaymentCheckStatus($pesanan_grup);
		if (isset($status['statusCode']) && isset($status['statusMessage']) && isset($status['amount'])) {
			if ($status['statusCode'] === '00' && $status['statusMessage'] === 'SUCCESS') {
				$found = Transaksi::where("pesanan_grup", $pesanan_grup)->where('status', 'SUCCESS')->first();
				if (!$found) {
					DB::transaction(function () use ($pesanan_grup, $status) {
						$date = date('Y-m-d');
						$amount = $status['amount'];
						$merchantOrderId = $pesanan_grup;
						$reference = $status['reference'];

						Pesanan::where('pesanan_grup', $pesanan_grup)->update(['status' => 'dibayar']);
						Transaksi::insert([
							'status' => 'SUCCESS',
							'created_at' => now(),
							'updated_at' => now(),
							'total' => $amount,
							'tgl_bayar' => $date,
							'reference' => $reference,
							'order_id' => $merchantOrderId,
							'pesanan_grup' => $pesanan_grup,
						]);
					});
				}
			}
		}
		if(isset($status['Message'])) return view('payment-status', [ 'error' => true, 'message' => $status['Message'] ]);
		return view('payment-status', [ 'error' => false, 'message' => $status['statusMessage'], 'code' => $status['statusCode'] ]);
	}

	public function home(Request $request)
	{
		return view('index');
	}

	public function index(Request $request)
	{
		$token = $request->cookie('token');
		if (!$this->webAuthenticate($token)) return redirect('/login');
		return view('index');
	}

	public function admin(Request $request)
	{
		$token = $request->cookie('token');
		if (!$this->webAuthenticate($token)) return redirect('/login');
		if(!$this->webAuthorization($token, 'admin')) return "Unauthorized Access";
		return view('index');
	}

	public function login(Request $request)
	{
		$token = $request->cookie('token');
		if ($this->webAuthenticate($token)) return redirect('/');
		return view('index');
	}

	public function register(Request $request)
	{
		$token = $request->cookie('token');
		if ($this->webAuthenticate($token)) return redirect('/');
		return view('index');
	}
}
