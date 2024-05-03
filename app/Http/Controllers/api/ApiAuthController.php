<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiAuthController extends Controller
{
	use ResponseFormat, UserCookie;

	public function register(Request $req) {
		$validator = Validator::make($req->all(), [
			"nama" => "required|max:255",
			"password" => "required|max:255",
			"email" => "required|email|unique:users,email|max:255",
		]);
		
		if ($validator->fails()) return $this->res($validator->messages(), 401);

		$toSave = $validator->validated();
		$toSave['password'] = Hash::make($toSave['password']);

		$m = new User();
		$m->role_id = 2;
		$m->nama = $toSave['nama'];
		$m->email = $toSave['email'];
		$m->password = $toSave['password'];
		$m->save();

		return $this->res("Success", 201);
	}

	public function login(Request $req) {
		$validator = Validator::make($req->all(), [
			"email" => "required|email|max:255",
			"password" => "required|max:255",
		]);
		
		if ($validator->fails()) return $this->res($validator->messages(), 401);

		$m = User::where('email', $req->email)->first();
		if (!$m) return $this->res("invalid credentials", 401);
		if (!Hash::check($req->password, $m->password)) return $this->res("invalid credentials", 401);

		$encrypted = $this->setUserCookie($m->id);

		return $this->res("Success", 201)->withCookie('token', $encrypted, 24 * 60, '/', null, false, true, 'strict');
	}
}

