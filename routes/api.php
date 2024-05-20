<?php

use App\Http\Controllers\api\ApiAuthController;
use App\Http\Controllers\api\ApiCartController;
use App\Http\Controllers\api\ApiKategoriController;
use App\Http\Controllers\api\ApiOngkirController;
use App\Http\Controllers\api\ApiPesananController;
use App\Http\Controllers\api\ApiProductController;
use App\Http\Controllers\api\ApiProfileController;
use App\Http\Controllers\api\ApiTransaksiController;
use App\Http\Controllers\api\ApiUlasanController;
use App\Http\Controllers\api\ApiUlasanReplyController;
use App\Http\Controllers\api\ApiVarianController;
use App\Http\Controllers\api\KategoriController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\TransaksiController;
use App\Http\Controllers\UlasanController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::get('/kategori', [\App\Http\Controllers\api\KategoriController::class, 'index']);
// Route::get('/kategori/{id}', [KategoriController::class, 'show']);
// Route::post('/kategori', [KategoriController::class, 'store']);
// Route::put('/kategori/{id}', [KategoriController::class, 'update']);
// Route::delete('/kategori/{id}', [KategoriController::class, 'destroy']);

Route::get("/uploaded/{filename}", function ($filename) {
	try {
		return response()->file(storage_path("app/public/uploaded/$filename"));
	} catch (\Throwable $th) {
		return response()->json(["message" => "file not found"], 404);
	}
});

Route::prefix("/auth")->group(function () {
	Route::post("/register", [ApiAuthController::class, 'register']);
	Route::post("/login", [ApiAuthController::class, 'login']);
});

Route::prefix("/profile")->group(function() {
	Route::get('/', [ApiProfileController::class, 'show']);
	Route::put('/', [ApiProfileController::class, 'update']);

});

Route::prefix("/kategori")->middleware('auth.stateless')->group(function () {
	Route::get('/', [ApiKategoriController::class, 'index']);
	Route::post('/', [ApiKategoriController::class, 'store']);
	Route::get('/{id}', [ApiKategoriController::class, 'show']);
	Route::put('/{id}', [ApiKategoriController::class, 'update']);
	Route::delete('/{id}', [ApiKategoriController::class, 'destroy']);
});

Route::prefix("/produk")->middleware('auth.stateless')->group(function () {
	Route::get('/', [ApiProductController::class, 'index']);
	Route::post('/', [ApiProductController::class, 'store']);
	Route::get('/{id}', [ApiProductController::class, 'show']);
	Route::put('/{id}', [ApiProductController::class, 'update']);
	Route::delete('/{id}', [ApiProductController::class, 'destroy']);

	Route::prefix("/{id_produk}/varian")->group(function () {
		Route::get('/', [ApiVarianController::class, 'index']);
		Route::post('/', [ApiVarianController::class, 'store']);
		Route::get('/{id}', [ApiVarianController::class, 'show']);
		Route::post('/update/{id}', [ApiVarianController::class, 'update']);
		Route::delete('/{id}', [ApiVarianController::class, 'destroy']);

		Route::prefix("/{id_varian}/ulasan")->group(function () {
			Route::get('/', [ApiUlasanController::class, 'index']);
			Route::post('/', [ApiUlasanController::class, 'store']);
			Route::get('/{id}', [ApiUlasanController::class, 'show']);
			Route::put('/{id}', [ApiUlasanController::class, 'update']);
			Route::delete('/{id}', [ApiUlasanController::class, 'destroy']);

			Route::prefix("/{id_ulasan_parent}/reply")->middleware('guard.admin')->group(function () {
				Route::get('/', [ApiUlasanReplyController::class, 'index']);
				Route::post('/', [ApiUlasanReplyController::class, 'store']);
				Route::get('/{id}', [ApiUlasanReplyController::class, 'show']);
				Route::put('/{id}', [ApiUlasanReplyController::class, 'update']);
				Route::delete('/{id}', [ApiUlasanReplyController::class, 'destroy']);
			});
		});

		Route::prefix("/{id_varian}/cart")->group(function () {
			Route::get('/', [ApiCartController::class, 'index']);
			Route::post('/', [ApiCartController::class, 'store']);
			Route::get('/{id}', [ApiCartController::class, 'show']);
			Route::put('/{id}', [ApiCartController::class, 'update']);
			Route::delete('/{id}', [ApiCartController::class, 'destroy']);
		});
	});
});


Route::prefix("/pesanan")->group(function () {
	Route::get('/', [ApiPesananController::class, 'index']);
	Route::post('/', [ApiPesananController::class, 'store']);
	Route::get('/{id}', [ApiPesananController::class, 'show']);
	Route::put('/{id}', [ApiPesananController::class, 'update']);
	Route::delete('/{id}', [ApiPesananController::class, 'destroy']);

	Route::prefix("/{pesanan_group}/transaksi")->group(function () {
		Route::get('/metode-bayar', [ApiTransaksiController::class, 'paymentMethod']);
		Route::get('/metode-bayar/{payment_method}', [ApiTransaksiController::class, 'transaction']);
		Route::post('/callback', [ApiTransaksiController::class, 'callbackAction']);
		// Route::get('/{id}', [ApiPesananController::class, 'show']);
		// Route::put('/{id}', [ApiPesananController::class, 'update']);
		// Route::delete('/{id}', [ApiPesananController::class, 'destroy']);
	});
});

Route::prefix("/ongkir")->group(function () {
	Route::get('/', [ApiOngkirController::class, 'index']);
	// Route::post('/', [ApiOngkirController::class, 'store']);
	Route::get('/{id}', [ApiOngkirController::class, 'show']);
	Route::put('/{id}', [ApiOngkirController::class, 'update']);
	Route::delete('/{id}', [ApiOngkirController::class, 'destroy']);
});

// Route::get('/pesanan', [PesananController::class, 'index']);
// Route::get('/pesanan', [PesananController::class, 'index']);
// Route::get('/pesanan/{id}', [PesananController::class, 'show']);
// Route::post('/pesanan', [PesananController::class, 'store']);


// Route::get('/user', [UserController::class, 'index']);
// Route::get('/user/{id}', [UserController::class, 'show']);
// Route::post('/user', [UserController::class, 'store']);
// Route::put('/user/{id}', [UserController::class, 'update']);
// Route::delete('/user/{id}', [UserController::class, 'destroy']);

// Route::get('/pesanan', [PesananController::class, 'index']);
// Route::get('/pesanan/{id}', [PesananController::class, 'show']);
// Route::post('/pesanan', [PesananController::class, 'store']);
// Route::put('/pesanan/{id}', [PesananController::class, 'update']);
// Route::delete('/pesanan/{id}', [PesananController::class, 'destroy']);

// Route::get('/transaksi', [TransaksiController::class, 'index']);
// Route::get('/transaksi/{id}', [TransaksiController::class, 'show']);
// Route::post('/transaksi', [TransaksiController::class, 'store']);
// Route::put('/transaksi/{id}', [TransaksiController::class, 'update']);
// Route::delete('/transaksi/{id}', [TransaksiController::class, 'destroy']);

// Route::get('/ulasan', [UlasanController::class, 'index']);
// Route::get('/ulasan/{id}', [UlasanController::class, 'show']);
// Route::post('/ulasan', [UlasanController::class, 'store']);
// Route::put('/ulasan/{id}', [UlasanController::class, 'update']);
// Route::delete('/ulasan/{id}', [UlasanController::class, 'destroy']);
