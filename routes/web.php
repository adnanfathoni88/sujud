<?php

use App\Http\Controllers\PesananController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ReactHandlerController;
use App\Http\Controllers\UlasanController;


Route::get("/login", [ReactHandlerController::class, "login"]);
Route::get("/register", [ReactHandlerController::class, "register"]);
Route::any('/admin/{all}', [ReactHandlerController::class, "admin"])->where('all', '^((?!api).)*?');
Route::any('{all}', [ReactHandlerController::class, "index"])->where('all', '^((?!api).)*?');

Route::get('/shop', function () {
    return view('user.shop');
});
Route::get('/detail', function () {
    return view('user.detail-produk');
});
Route::get('/cart', function () {
    return view('user.cart');
});
Route::get('/checkout', function () {
    return view('user.checkout');
});
Route::get('/location', function () {
    return view('user.location');
});
Route::get('/about', function () {
    return view('user.about');
});

Route::get('/kategori', [KategoriController::class, 'index']);
Route::get('/add-kategori', [KategoriController::class, 'create']);
Route::post('/add-kategori', [KategoriController::class, 'store']);
Route::get('/edit-kategori/{id}', [KategoriController::class, 'edit']);
Route::put('/update-kategori/{id}', [KategoriController::class, 'update']);
Route::delete('/delete-kategori/{id}', [KategoriController::class, 'destroy']);
Route::get('/cari-kategori', [KategoriController::class, 'cari']);

Route::controller(ProdukController::class)->group(function () {
    Route::get('/produk', 'index');
    Route::get('/add-produk', 'create');
    Route::post('/add-produk', 'store');
    Route::get('/edit-produk/{id}', 'edit');
    Route::post('/edit-produk/{id}', 'update');
    Route::get('/hapus-produk/{id}', 'destroy');
    Route::get('/hapus-gambar/{id}', 'hapusGambar');
});

Route::controller(UlasanController::class)->group(function () {
    Route::get('/ulasan', 'index');
    Route::get('/reply-ulasan/{id}', 'reply');
    Route::post('/reply-ulasan/{id}', 'replyStore');
    Route::post('/edit-ulasan/{id}', 'update');
    Route::get('/delete-ulasan/{id}', 'destroy');
});

Route::controller(PesananController::class)->group(function () {
    Route::get('/pesanan', 'index');
    Route::get('/add-pesanan', 'create');
    Route::post('/add-pesanan', 'store');
    Route::get('/edit-pesanan/{id}', 'edit');
    Route::post('/edit-pesanan/{id}', 'update');
    Route::get('/delete-pesanan/{id}', 'destroy');
});
