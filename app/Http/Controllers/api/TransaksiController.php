<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransaksiController extends Controller
{
    function index()
    {
        $transaksi = Transaksi::with('pesanan')->get();

        $response = [
            'status' => 'sukses',
            'message' => 'Daftar transaksi',
            'transaksi' => $transaksi,
        ];

        return response()->json($response, 200);
    }

    function show($id)
    {
        $transaksi = Transaksi::with('pesanan')->where('id', $id)->first();

        if (!$transaksi) {
            return response()->json(['status' => 'gagal', 'message' => 'Transaksi tidak ditemukan'], 404);
        }

        $response = [
            'status' => 'sukses',
            'message' => 'Detail transaksi',
            'transaksi' => $transaksi,
        ];
        return response()->json($response, 200);
    }

    function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kode' => 'required|unique:transaksis',
            'tgl_bayar' => 'required',
            'metode' => 'required',
            'status' => 'required',
            'total' => 'required',
            'pesanan_id' => 'required',


        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $transaksi = Transaksi::create($request->all());
        $transaksi->save();

        $response = [
            "status" => "sukses",
            "message" => "Transaksi berhasil ditambahkan",
            "transaksi" => $transaksi,
        ];

        return response()->json($response, 200);
    }

    function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'kode' => 'required|unique:transaksis',
            'tgl_bayar' => 'required',
            'metode' => 'required',
            'status' => 'required',
            'total' => 'required',
            'pesanan_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $transaksi = Transaksi::find($id);
        $transaksi->update($request->all());

        $response = [
            "status" => "sukses",
            "message" => "Transaksi berhasil diupdate",
            "transaksi" => $transaksi,
        ];

        return response()->json($response, 200);
    }

    function destroy($id)
    {
        $transaksi = Transaksi::find($id);

        if (!$transaksi) {
            return response()->json([
                'status' => 'gagal',
                'message' => 'Transaksi tidak ditemukan'
            ], 404);
        }

        $transaksi->delete();

        $response = [
            "status" => "suskes",
            "message" => "Transaksi berhasil dihapus"
        ];

        return response()->json($response, 200);
    }
}
