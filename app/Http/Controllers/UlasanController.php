<?php

namespace App\Http\Controllers;

use App\Models\Ulasan;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;


class UlasanController extends Controller
{
    function index()
    {
        $ulasan = Ulasan::all()->where('parent_id', null);
        return view('ulasan.index', compact('ulasan'));
    }
    function create()
    {
        return view('ulasan.create');
    }
    function reply($id)
    {
        $ulasan = Ulasan::with('balasan')->findOrFail($id);
        return view('ulasan.reply', compact('ulasan'));
    }
    function replyStore(Request $request, $id)
    {
        $ulasan = Ulasan::findOrFail($id);
        Ulasan::create([
            'tgl_ulasan' => now(),
            'konten' => $request->konten,
            'rating' => $ulasan['rating'],
            'produk_id' => $ulasan['produk_id'],
            'user_id' => 1, //admin
            'parent_id' => $ulasan['id']
        ]);

        return redirect('/ulasan')->with('success', 'Ulasan berhasil dibalas');
    }

    function update(Request $request, $id)
    {
        $ulasan = Ulasan::with('balasan')->findOrFail($id);

        $ulasan->update([
            'tgl_ulasan' => now(),
            'konten' => $request->konten,
            'rating' => $ulasan['rating'],
            'produk_id' => $ulasan['produk_id'],
            'user_id' => $ulasan['user_id'],
            'parent_id' => $ulasan['parent_id']
        ]);

        return redirect('/ulasan')->with('success', 'Ulasan berhasil diubah');
    }

    function destroy($id)
    {
        $ulasan = Ulasan::findOrFail($id);
        $ulasan->delete();

        return redirect('/ulasan')->with('delete', 'Ulasan berhasil dihapus');
    }
}
