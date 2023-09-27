<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProdukController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/home', function () {
    return view('home');
});

Route::get('/shop', function () {
    return view('shop');
});
Route::get('/detail', function () {
    return view('detailProduk');
});
Route::get('/cart', function () {
    return view('cart');
});
Route::get('/checkout', function () {
    return view('checkout');
});
Route::get('/location', function () {
    return view('location');
});
Route::get('/about', function () {
    return view('about');
});


Route::get('/kategori', [KategoriController::class, 'index']);
Route::get('/add-kategori', [KategoriController::class, 'create']);
Route::post('/add-kategori', [KategoriController::class, 'store']);
Route::get('/edit-kategori/{id}', [KategoriController::class, 'edit']);
Route::put('/update-kategori/{id}', [KategoriController::class, 'update']);
Route::delete('/delete-kategori/{id}', [KategoriController::class, 'destroy']);
Route::get('/cari-kategori', [KategoriController::class, 'cari']);

Route::get('/produk', [ProdukController::class, 'index']);
Route::get('/add-produk', [ProdukController::class, 'create']);
Route::post('/add-produk', [ProdukController::class, 'store']);
