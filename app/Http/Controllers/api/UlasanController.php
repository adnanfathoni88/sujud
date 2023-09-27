<?php

namespace App\Http\Controllers;

use App\Models\Ulasan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UlasanController extends Controller
{
    function index()
    {
        $ulasan = Ulasan::with('produk')->get();

        $response = [
            'status' => 'sukses',
            'message' => 'Daftar ulasan',
            'ulasan' => $ulasan,
        ];

        return response()->json($response, 200);
    }

    function show($id)
    {
        $ulasan = Ulasan::with('produk')->where('id', $id)->first();

        if (!$ulasan) {
            return response()->json(['status' => 'gagal', 'message' => 'ulasan tidak ditemukan'], 404);
        }

        $response = [
            'status' => 'sukses',
            'message' => 'Detail ulasan',
            'ulasan' => $ulasan,
        ];
        return response()->json($response, 200);
    }

    function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tgl_ulasan' => 'required',
            'konten' => 'required',
            'rating' => 'required',
            'produk_id' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $ulasan = Ulasan::create($request->all());
        $ulasan->save();

        $response = [
            "status" => "sukses",
            "message" => "ulasan berhasil ditambahkan",
            "ulasan" => $ulasan,
        ];

        return response()->json($response, 200);
    }

    function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'tgl_ulasan' => 'required',
            'konten' => 'required',
            'rating' => 'required',
            'produk_id' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $ulasan = Ulasan::find($id);
        $ulasan->update($request->all());

        $response = [
            "status" => "sukses",
            "message" => "ulasan berhasil diupdate",
            "ulasan" => $ulasan,
        ];

        return response()->json($response, 200);
    }

    function destroy($id)
    {
        $ulasan = Ulasan::find($id);

        if (!$ulasan) {
            return response()->json([
                'status' => 'gagal',
                'message' => 'ulasan tidak ditemukan'
            ], 404);
        }

        $ulasan->delete();

        $response = [
            "status" => "suskes",
            "message" => "ulasan berhasil dihapus"
        ];

        return response()->json($response, 200);
    }
}
