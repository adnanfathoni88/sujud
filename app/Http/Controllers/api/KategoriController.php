<?php

namespace App\Http\Controllers\api;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class KategoriController extends Controller
{
    function index()
    {
        $kategori = Kategori::all();
        return response()->json(['status' => true, 'kategori' => $kategori], 200);
    }

    function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|unique:kategoris'
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()], 400);
        }


        $kategori = new Kategori([
            'nama' => $request->nama
        ]);

        $kategori->save();

        $response = [
            'status' => true,
            'message' => 'Kategori berhasil ditambahkan',
            'kategori' => $kategori,
        ];

        return response()->json($response, 200);
    }

    function show($id)
    {
        $kategori = Kategori::find($id);

        if (!$kategori) {
            return response()->json(['status' => false, 'message' => 'Kategori tidak ditemukan'], 404);
        }
        $response = [
            'status' => true,
            'message' => 'Detail kategori',
            'kategori' => $kategori,
        ];

        return response()->json($response, 200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => $validator->errors()], 400);
        }

        $kategori = Kategori::find($id);

        if (!$kategori) {
            return response()->json(['status' => false, 'message' => 'Kategori tidak ditemukan'], 404);
        }

        $kategori->nama = $request->nama;
        $kategori->save();

        return response()->json(['status' => true, 'message' => 'Kategori berhasil diupdate'], 200);
    }

    // function destroy($id)
    // {
    //     if (!$kategori = Kategori::find($id))
    //         return response()->json(['status' => false, 'message' => 'Kategori tidak ditemukan'], 404);

    //     $produkTerkait = $kategori->produk()->exists();

    //     if ($produkTerkait)
    //         return response()->json(['status' => false, 'message' => 'Kategori tidak bisa dihapus karena memiliki produk terkait'], 400);
    //     $kategori = Kategori::find($id);
    //     $kategori->delete();
    //     return response()->json(['status' => false, 'message' => 'Kategori berhasil dihapus'], 200);
    // }
    function destroy($id)
    {
        if (!$kategori = Kategori::find($id))
            return response()->json(['status' => false, 'message' => 'Kategori tidak ditemukan'], 404);

        $produkTerkait = $kategori->produk()->exists();

        if ($produkTerkait)
            return response()->json(['status' => false, 'message' => 'Kategori tidak bisa dihapus karena memiliki produk terkait'], 400);

        // Perubahan: Gunakan status 200 untuk respons sukses dan sertakan pesan dalam body respons
        $kategori->delete();
        return response()->json(['status' => true, 'message' => 'Kategori berhasil dihapus'], 200);
    }
}
