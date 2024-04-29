<?php

use App\Http\Controllers\api\ApiProductController;
use App\Http\Controllers\api\KategoriController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\TransaksiController;
use App\Http\Controllers\UlasanController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/kategori', [\App\Http\Controllers\api\KategoriController::class, 'index']);
Route::get('/kategori/{id}', [KategoriController::class, 'show']);
Route::post('/kategori', [KategoriController::class, 'store']);
Route::put('/kategori/{id}', [KategoriController::class, 'update']);
Route::delete('/kategori/{id}', [KategoriController::class, 'destroy']);

Route::prefix("/produk")->group(function () {
	Route::get('/', [ApiProductController::class, 'index']);
	Route::post('/', [ApiProductController::class, 'store']);
	Route::get('/{id}', [ApiProductController::class, 'show']);
	Route::put('/{id}', [ApiProductController::class, 'update']);
	Route::delete('/{id}', [ApiProductController::class, 'destroy']);
});


Route::get('/pesanan', [PesananController::class, 'index']);
Route::get('/pesanan', [PesananController::class, 'index']);
Route::get('/pesanan/{id}', [PesananController::class, 'show']);
Route::post('/pesanan', [PesananController::class, 'store']);


Route::get('/user', [UserController::class, 'index']);
Route::get('/user/{id}', [UserController::class, 'show']);
Route::post('/user', [UserController::class, 'store']);
Route::put('/user/{id}', [UserController::class, 'update']);
Route::delete('/user/{id}', [UserController::class, 'destroy']);

Route::get('/pesanan', [PesananController::class, 'index']);
Route::get('/pesanan/{id}', [PesananController::class, 'show']);
Route::post('/pesanan', [PesananController::class, 'store']);
Route::put('/pesanan/{id}', [PesananController::class, 'update']);
Route::delete('/pesanan/{id}', [PesananController::class, 'destroy']);

Route::get('/transaksi', [TransaksiController::class, 'index']);
Route::get('/transaksi/{id}', [TransaksiController::class, 'show']);
Route::post('/transaksi', [TransaksiController::class, 'store']);
Route::put('/transaksi/{id}', [TransaksiController::class, 'update']);
Route::delete('/transaksi/{id}', [TransaksiController::class, 'destroy']);

Route::get('/ulasan', [UlasanController::class, 'index']);
Route::get('/ulasan/{id}', [UlasanController::class, 'show']);
Route::post('/ulasan', [UlasanController::class, 'store']);
Route::put('/ulasan/{id}', [UlasanController::class, 'update']);
Route::delete('/ulasan/{id}', [UlasanController::class, 'destroy']);
