<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    function index()
    {
        $user = User::all();

        $response = [
            'status' => 'sukses',
            'message' => 'Daftar user',
            'user' => $user,
        ];

        return response()->json($response, 200);
    }

    function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['status' => 'gagal', 'message' => 'User tidak ditemukan'], 404);
        }

        $response = [
            'status' => 'sukses',
            'message' => 'Detail user',
            'user' => $user,
        ];
        return response()->json($response, 200);
    }

    function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|unique:users',
            'email' => 'required|unique:users',
            'password' => 'required',
            'nomor' => 'required',
            'alamat' => 'required',
            'role_id' => 'required',

         
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $user = User::create($request->all());
        $user->save();

        $response = [
            'status' => 'sukses',
            'message' => 'User berhasil ditambahkan',
            'user' => $user,
        ];

        return response()->json($response, 200);
    }

    function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|unique:users',
            'email' => 'required|unique:users',
            'password' => 'required',
            'nomor' => 'required',
            'alamat' => 'required',
            'role_id' => 'required',
        ]);



        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $user = User::find($id);
        $user->update($request->all());

        $response = [
            'status' => 'sukses',
            'message' => 'User berhasil diupdate',
            'user' => $user,
        ];

        return response()->json($response, 200);
    }
    function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['status' => 'gagal', 'message' => 'User tidak ditemukan'], 404);
        }

        $user->delete();

        $response = [
            'status' => 'sukses',
            'message' => 'User berhasil dihapus',
        ];

        return response()->json($response, 200);
    }
}
