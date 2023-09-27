<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Produk;
use App\Models\Kategori;

class ProdukController extends Controller
{
    function index()
    {
        $produk = Produk::all();
        return view('produk.index', compact('produk'));
    }
    function create()
    {
        $kategori = Kategori::all();
        return view('produk.create', compact('kategori'));
    }

    function store()
    {
        
    }
}
