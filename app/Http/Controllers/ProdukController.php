<?php

namespace App\Http\Controllers;

use App\Models\Gambar;
use App\Models\Produk;
use App\Models\Kategori;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;

class ProdukController extends Controller
{
    function index()
    {
        $produk = Produk::all();
        $gambar = Gambar::all()->groupBy('produk_id'); // group gambar 
        return view('produk.index', compact('produk', 'gambar'));
    }
    function create()
    {
        $kategori = Kategori::all();
        return view('produk.create', compact('kategori'));
    }

    function store(Request $request)
    {
        $data = $request->validate([
            'kode' => 'required|unique:produks',
            'nama' => 'required|unique:produks',
            'deskripsi' => 'required',
            'harga' => 'required|int',
            'stok' => 'required|int',
            'kategori_id' => 'required',
        ]);

        Produk::create($data);

        // upload gambar
        if ($request->hasFile('gambar')) {
            $co = 0;
            foreach ($request->file('gambar') as $file) {
                $nama = $data['kode'] . '-' . Str::slug($data['nama']) . '-' . $co . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/img', $nama);
                Gambar::create([
                    'nama' => $nama,
                    'produk_id' => Produk::latest()->first()->id
                ]);
                $co++;
            }
        }

        return redirect()->to('produk')->with('success', 'Data ' . $data['nama'] . ' berhasil ditambahkan');
    }

    function edit(Request $request, $id)
    {
        $produk = Produk::findOrFail($id);
        $kategori = Kategori::all();
        $gambar = Gambar::where('produk_id', $id)->get(); // gambar dari produk yang dipilih

        return view('produk.edit', compact('produk', 'kategori', 'gambar'));
    }

    function update(Request $request, $id)
    {
        $data = $request->validate([
            'kode' => 'required',
            'nama' => 'required',
            'deskripsi' => 'required',
            'harga' => 'required|int',
            'stok' => 'required|int',
            'kategori_id' => 'required',
        ]);

        $produk = Produk::findOrFail($id);
        $produk->update($data);

        $existCo = Gambar::where('produk_id', $id)->count(); // jumlah gambar yang sudah ada

        if ($request->hasFile('gambar')) {
            $co =  $existCo + 1;    // counter untuk nama gambar
            foreach ($request->file('gambar') as $file) {
                $nama = $data['kode'] . '-' . Str::slug($data['nama']) . '-' . $co . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/img', $nama);
                Gambar::create([    // simpan ke database
                    'nama' => $nama,
                    'produk_id' => Produk::latest()->first()->id
                ]);
                $co++;
            }
        }
        return redirect()->to('produk')->with('success', 'Data ' . $data['nama'] . ' berhasil diubah');
    }


    function destroy($id)
    {
        $produk = Produk::findOrFail($id);
        $gambar = Gambar::where('produk_id', $id)->get();

        foreach ($gambar as $g) {
            Storage::delete('public/img/' . $g->nama); // hapus gambar di lokal
        }

        $produk->delete();
        $produk->gambar()->delete(); // hapus gambar di database

        return redirect()->to('produk')->with('delete', 'Data ' . $produk->nama . ' berhasil dihapus');
    }

    function hapusGambar($id)
    {
        $gambar = Gambar::findOrFail($id);
        $gambar->delete(); // hapus gambar di database

        Storage::delete('public/img/' . $gambar->nama); // hapus gambar di lokal

        return redirect()->back()->with('delete', 'Gambar berhasil dihapus');
    }
}
