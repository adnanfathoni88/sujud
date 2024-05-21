<?php

namespace App\Http\Controllers\api;

use App\Models\Gambar;
use App\Models\User;
use App\Traits\ResponseFormat;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiUserController extends Controller
{
	use ResponseFormat;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(15);
		return $this->res($users, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $req)
    {
        $validator = Validator::make($req->all(), [
			"nama" => "required|max:255",
			"password" => "required|max:255",
			"email" => "required|email|unique:users,email|max:255",
			"nomor" => "required|string|unique:users,nomor|max:255",
		]);
		
		if ($validator->fails()) return $this->res($validator->messages(), 401);

		$toSave = $validator->validated();
		$toSave['password'] = Hash::make($toSave['password']);

		$m = new User();

		DB::transaction(function() use($toSave, &$m) {
			$g = new Gambar();
			$g->nama = "";
			$g->save();

			$m->role_id = 1;
			$m->gambar_id = $g->id;
			$m->nama = $toSave['nama'];
			$m->email = $toSave['email'];
			$m->nomor = $toSave['nomor'];
			$m->password = $toSave['password'];
			$m->save();
			$m->id;
		});

		return $this->res("Success", 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);
		if (!$user) return $this->res("User not found", 404);

		return $this->res($user, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateRole(Request $request, string $id)
    {
		$validator = Validator::make($request->all(), [
			"role_id" => "required|exists:roles,id",
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 401);

		$user = User::find($id);
		if (!$user) return $this->res("User not found", 404);

		$user->role_id = $request->role_id;
		$user->save();
		return $this->res("Success", 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
		if (!$user) return $this->res("User not found", 404);

		$user->delete();
    }
}
