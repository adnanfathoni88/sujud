<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class ApiProfileController extends Controller
{
	use ResponseFormat, UserCookie;

	public function update(Request $request)
	{
		$id = $this->getUserCookie($request->cookie('token'));
		dd($request);
		$validator = Validator::make($request->all(), [
			"nama" => 'required|max:255',
			"nomor" => 'required|max:255',
			"alamat" => 'required|max:255',
			"email" => 'required|email|max:255|unique:users,email,' . $id . ',id',
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$m = User::find($id);
		if (!$m) return $this->res("Data not found", 404);

		$m->nama = $request->nama;
		$m->nomor = $request->nomor;
		$m->alamat = $request->alamat;
		$m->email = $request->email;
		$m->save();

		return $this->res("Success", 201);
	}

	public function show(Request $request)
	{
		$id = $this->getUserCookie($request->cookie('token'));

		$m = User::find($id);
		if (!$m) return $this->res("Data not found", 404);

		return $this->res($m, 201);
	}
}
