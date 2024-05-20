<?php

namespace App\Http\Controllers\api;

use App\Models\Gambar;
use App\Models\User;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class ApiProfileController extends Controller
{
	use ResponseFormat, UserCookie;

	public function update(Request $request)
	{
		$id = $this->getUserCookie($request->cookie('token'));
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

	public function update_profile_picture(Request $request)
	{
		$id = $this->getUserCookie($request->cookie('token'));
		$validator = Validator::make(array_merge(['user_id' => $id], $request->all()), [
			"user_id" => 'required|exists:users,id',
			"image" => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$user = User::find($id);
		if (!$user) return $this->res("Data not found", 404);
		
		try {
			$file = $request->file('image');
			$filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
			$file->storeAs('uploaded', $filename, 'public');

			$m2 = Gambar::where('id', $user->gambar_id)->first();
			$oldImage = storage_path("app/public/uploaded/".$m2->nama);
			$m2->nama = $filename;
			
			$m2->save();
			error_log($m2->nama);
			if (is_dir($oldImage)) return $this->res("Success", 201);
			if (file_exists($oldImage)) unlink($oldImage);	
		} catch (\Throwable $th) { 
			error_log($th->getMessage());
			return $this->res("Failed to upload image", 400);
		}
	
	}

	public function show(Request $request)
	{
		$id = $this->getUserCookie($request->cookie('token'));

		$m = User::with('gambar')->find($id);
		if (!$m) return $this->res("Data not found", 404);

		return $this->res($m, 200);
	}
}
