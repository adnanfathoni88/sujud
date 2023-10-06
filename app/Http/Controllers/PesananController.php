<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Produk;
use App\Models\Pesanan;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PesananController extends Controller
{
    function index()
    {
        $pesanan = Pesanan::all();
        return view('pesanan.index', compact('pesanan'));
    }
    function create()
    {
        $user = User::all();
        $produk = Produk::all();
        return view('pesanan.create', compact('user', 'produk'));
    }

    function store(Request $request)
    {
        $data = $request->validate([
            'kode' => 'required|unique:pesanans',
            'tgl_pesan' => 'required',
            'status_bayar' => 'required',
            'status_kirim' => 'required',
            'total' => 'required',
            'alamat' => 'required',
            'produk_id' => 'required',
            'user_id' => 'required',
        ]);

        Pesanan::create($data);
        return redirect()->to('pesanan')->with('success', 'Data ' . $data['kode'] . ' berhasil ditambahkan');
    }

    function edit(Request $request, $id)
    {
        $pesanan = Pesanan::findOrFail($id);
        $user = User::all();
        $produk = Produk::all();
        return view('pesanan.edit', compact('pesanan', 'user', 'produk'));
    }

    function update(Request $request, $id)
    {
        $data = $request->validate([
            'kode' => 'required|unique:pesanans,kode,' . $id,
            'tgl_pesan' => 'required',
            'status_bayar' => 'required',
            'status_kirim' => 'required',
            'total' => 'required',
            'alamat' => 'required',
            'produk_id' => 'required',
            'user_id' => 'required',
        ]);

        Pesanan::findOrFail($id)->update($data);
        return redirect()->to('pesanan')->with('success', 'Data ' . $data['kode'] . ' berhasil diupdate');
    }

    function destroy($id)
    {
        $pesanan = Pesanan::findOrFail($id);
        $pesanan->delete();
        return redirect()->to('pesanan')->with('delete', 'Data ' . $pesanan->kode . ' berhasil dihapus');
    }
}
