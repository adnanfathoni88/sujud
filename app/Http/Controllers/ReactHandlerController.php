<?php

namespace App\Http\Controllers;

use App\Traits\AuthWeb;
use App\Traits\Payment;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ReactHandlerController extends Controller
{
	use AuthWeb, Payment;

    public function index(Request $request) {
		$token = $request->cookie('token');
		if(!$this->webAuthenticate($token)) return redirect('/login');
		return view('index');
	}

	public function admin(Request $request) {
		$token = $request->cookie('token');
		if(!$this->webAuthenticate($token)) return redirect('/login');
		if(!$this->webAuthorization($token, 'admin')) return "Unauthorized Access";
		return view('index');
	}

	public function login(Request $request) {
		$token = $request->cookie('token');
		if($this->webAuthenticate($token)) return redirect('/');
		return view('index');
	}

	public function register(Request $request) {
		$token = $request->cookie('token');
		if($this->webAuthenticate($token)) return redirect('/');
		return view('index');
	}
}
