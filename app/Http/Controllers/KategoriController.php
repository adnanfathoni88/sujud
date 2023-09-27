<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;


class KategoriController extends Controller
{

    function index()
    {
        $kategori = Kategori::all();
        return view('kategori.index', compact('kategori'));
    }

    function create()
    {
        return view('kategori.create');
    }

    function store(Request $request)
    {

        $data = $request->validate([
            'nama' => 'required|unique:kategoris'
        ]);

        Kategori::create($data);

        return redirect()->to('kategori')->with('success', 'Data ' . $data['nama'] . ' berhasil ditambahkan');
    }

    function edit($id)
    {
        $kategori = Kategori::findOrFail($id);
        return view('kategori.edit', compact('kategori'));
    }

    function update(Request $request, $id)
    {
        $data = $request->validate([
            'nama' => 'required|unique:kategoris,nama,' . $id
        ]);

        $kategori = Kategori::findOrFail($id);
        $kategori->update($data);

        return redirect()->to('kategori')->with('success', 'Data ' . $data['nama'] . ' berhasil diubah');
    }
    function destroy($id)
    {
        $kategori = Kategori::findOrFail($id);

        if ($kategori->produk->count() > 0) {
            return redirect()->to('kategori')->with('error', 'Data ' . $kategori->nama . ' tidak bisa dihapus karena masih memiliki produk');
        }
        $kategori->delete();

        return redirect()->to('kategori')->with('success', 'Data ' . $kategori->nama . ' berhasil dihapus');
    }

    function cari(Request $request)
    {
        $cari = $request->input('cari');
        $data = Kategori::where('nama', 'like', "%" . $cari . "%")->paginate(5);

        return view('kategori.index', compact('data'));
    }
}
