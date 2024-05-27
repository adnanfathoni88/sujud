<?php

namespace App\Http\Controllers;

use App\Traits\AuthWeb;
use App\Traits\Payment;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ReactHandlerController extends Controller
{
	use AuthWeb, Payment;

	public function payment_success(Request $request) 
	{
		$pesanan_grup = $request->query('pesanan_grup');
		if(!$pesanan_grup) return view('payment-status', [ 'error' => true, 'message' => 'Pesanan tidak ditemukan' ]);
		$status = $this->apiPaymentCheckStatus($pesanan_grup);
		if(isset($status['Message'])) return view('payment-status', [ 'error' => true, 'message' => $status['Message'] ]);
		return view('payment-status', [ 'error' => false, 'message' => $status['statusMessage'], 'code' => $status['statusCode'] ]);

		
		// return view('payment-status', [ 'error' => true, 'message' => 'EXPIRED']);
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
