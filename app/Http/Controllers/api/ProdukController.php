<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProdukController extends Controller
{
    function index()
    {
        $produk = Produk::with('kategori')->get();

        $response = [
            'status' => 'sukses',
            'message' => 'Daftar produk',
            'produk' => $produk,
        ];

        return response()->json($response, 200);
    }

    function show($id)
    {
        $produk = Produk::with('kategori')->find($id);

        if (!$produk) {
            return response()->json(['status' => 'gagal', 'message' => 'Produk tidak ditemukan'], 404);
        }

        $response = [
            'status' => 'sukses',
            'message' => 'Detail produk',
            'produk' => $produk,
        ];

        return response()->json($response, 200);
    }

    function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'kode' => 'required|unique:produks',
            'nama' => 'required|unique:produks',
            'deskripsi' => 'required',
            'harga' => 'required',
            'stok' => 'required',
            'gambar' => 'required',
            'kategori_id' => 'required|exists:kategoris,id'
        ]);

        if ($validator->fails())
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);

        $kategori = Kategori::find($request->kategori_id);
        $produk = Produk::create($request->all());
        $produk->kategori()->associate($kategori);
        $produk->save();

        $response = [
            'status' => 'sukses',
            'message' => 'Produk berhasil ditambahkan',
            'produk' => $produk,
        ];

        return response()->json($response, 200);
    }

    function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'kode' => 'required|unique:produks',
            'nama' => 'required|unique:produks',
            'deskripsi' => 'required',
            'harga' => 'required',
            'stok' => 'required',
            'gambar' => 'required',
            'kategori_id' => 'required|exists:kategoris,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'gagal', 'message' => $validator->errors()], 400);
        }

        $produk = Produk::find($id);
        if (!$produk) {
            return response()->json(['status' => 'gagal', 'message' => 'Produk tidak ditemukan'], 404);
        }

        $kategori = Kategori::find($request->kategori_id);
        $produk->update($request->all());
        $produk->kategori()->associate($kategori);
        $produk->save();

        $repsonse = [
            'status' => 'sukses',
            'message' => 'Produk berhasil diupdate',
            'produk' => $produk,
        ];

        return response()->json($repsonse, 200);
    }

    function destroy($id)
    {
        $produk = Produk::find($id);
        if (!$produk) {
            return response()->json(['status' => 'gagal', 'message' => 'Produk tidak ditemukan'], 404);
        }

        $produk->delete();

        $response = [
            'status' => 'sukses',
            'message' => 'Produk berhasil dihapus',
        ];

        return response()->json($response, 200);
    }
}
