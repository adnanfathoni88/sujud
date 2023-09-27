<?php

namespace App\Http\Controllers;

use App\Models\Pesanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PesananController extends Controller
{
    function index()
    {
        $pesanan = Pesanan::with('produk')->get();

        if (!$pesanan) {
            return response()->json(['status' => 'gagal', 'message' => 'Pesanan tidak ditemukan'], 404);
        }

        $response = [
            'status' => 'sukses',
            'message' => 'Daftar pesanan',
            'pesanan' => $pesanan,
        ];

        return response()->json($response, 200);
    }

    function show($id)
    {
        $pesanan = Pesanan::with('produk')->find($id);

        if (!$pesanan) {
            return response()->json(['status' => 'gagal', 'message' => 'Pesanan tidak ditemukan'], 404);
        }

        $response = [
            'status' => 'sukses',
            'message' => 'Detail pesanan',
            'pesanan' => $pesanan,
        ];

        return response()->json($response, 200);
    }

    function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kode' => 'required|unique:pesanans',
            'tgl_pesan' => 'required',
            'status_bayar' => 'required',
            'status_kirim' => 'required',
            'total' => 'required',
            'alamat' => 'required',
            'produk_id' => 'required|exists:produks,id',
            'user_id' => 'required|exists:users,id',
        ]);

        if ($validator->fails())
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);

        $pesanan = Pesanan::create($request->all());
        $pesanan->save();

        $response = [
            'status' => 'sukses',
            'message' => 'Pesanan berhasil ditambahkan',
            'pesanan' => $pesanan,
        ];

        return response()->json($response, 200);
    }

    function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'kode' => 'required|unique:pesanans',
            'tgl_pesan' => 'required',
            'status_bayar' => 'required',
            'status_kirim' => 'required',
            'total' => 'required',
            'alamat' => 'required',
            'produk_id' => 'required|exists:produks,id',
            'user_id' => 'required|exists:users,id',


        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $pesanan = Pesanan::find($id);
        $pesanan->update($request->all());

        $response = [
            'status' => 'sukses',
            'message' => 'Pesanan berhasil diupdate',
            'pesanan' => $pesanan,
        ];

        return response()->json($response, 200);
    }


    function destroy($id)
    {
        if (!$pesanan = Pesanan::find($id))
            return response()->json(['status' => 'gagal', 'message' => 'Pesanan tidak ditemukan'], 404);

        $pesanan->delete();
        return response()->json(['status' => 'sukses', 'message' => 'Pesanan berhasil dihapus'], 200);
    }
}
