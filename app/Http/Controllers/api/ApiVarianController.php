<?php

namespace App\Http\Controllers\api;

use App\Models\Gambar;
use App\Models\Varian;
use App\Traits\ResponseFormat;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApiVarianController extends Controller
{
	use ResponseFormat;

    /**
     * Display a listing of the resource.
     */
    public function index(string $id_produk)
    {
		$m = Varian::where('produk_id', $id_produk)
			->with('gambar')
			->get();
		return $this->res($m, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $id_produk)
    {
		$validator = Validator::make(array_merge(['id_produk' => $id_produk], $request->all()), [
			// produk
			'id_produk' => 'required|exists:produks,id',
			// varian
			'stok' => 'numeric|min:0',
			'warna' => 'required|max:255',
			'ukuran' => 'required|max:255',
			'harga' => 'required|numeric|min:0',
			// image
			'image' => 'required|image|mimes:jpeg,png|max:3072'
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 400);
		
		$file = $request->file('image');
		$filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
		$file->storeAs('uploaded', $filename, 'public');

		DB::transaction(function () use($request, $filename, $id_produk) {
			$m2 = new Varian();
			$m2->harga = $request->harga;
			$m2->warna = $request->warna;
			$m2->ukuran = $request->ukuran;
			$m2->produk_id = $id_produk;
			$m2->stok = $request->stok;
			$m2->save();	

			$m3 = new Gambar();
			$m3->nama = $filename;
			$m3->varian_id = $m2->id;
			$m3->save();
		});

		return $this->res("Inserted", 201);
	}

    /**
     * Display the specified resource.
     */
    public function show(string $id_produk, string $id)
    {
		$m = Varian::where('produk_id', $id_produk)
			->with('gambar')
			->find($id);

		if(!$m) return $this->res("Varian not found", 404);

		return $this->res($m, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id_produk, string $id)
    {
		$validator = Validator::make(array_merge(['id_produk' => $id_produk], $request->all()), [
			// produk
			'id_produk' => 'required|exists:produks,id',
			// varian
			'stok' => 'numeric|min:0',
			'warna' => 'required|max:255',
			'ukuran' => 'required|max:255',
			'harga' => 'required|numeric|min:0',
			// image
			'image' => 'image|mimes:jpeg,png|max:3072'
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 400);

		if (!$request->hasFile('image')) {
			$m = Varian::where('produk_id', $id_produk)
				->find($id);
			if(!$m) return $this->res("Not Found", 404);
			
			$m->stok = $request->stok;
			$m->harga = $request->harga;
			$m->warna = $request->warna;
			$m->ukuran = $request->ukuran;
			$m->save();

			return $this->res("Updated", 201);
		}

		$imgSuccess = false;

		try {
			$file = $request->file('image');
			$filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
			$file->storeAs('uploaded', $filename, 'public');
			$imgSuccess = true;
		} catch (\Throwable $th) { }

		DB::transaction(function () use($request, $filename, $id_produk, $id, $imgSuccess) {
			$m = Varian::where('produk_id', $id_produk)
				->find($id);			
			$m->stok = $request->stok;
			$m->harga = $request->harga;
			$m->warna = $request->warna;
			$m->ukuran = $request->ukuran;
			$m->save();

			if($imgSuccess) {
				$m2 = Gambar::where('varian_id', $m->id)->first();
				$oldImage = storage_path("app/public/uploaded/".$m2->nama);
				$m2->nama = $filename;
				
				$m2->save();
				if (file_exists($oldImage)) unlink($oldImage);	
			}
		});

		return $this->res("Updated", 201);
    }
	
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $produk_id, string $id)
    {

		DB::transaction(function () use($id) {
			$m = Gambar::where('varian_id', $id)->first();
			
			$oldImage = storage_path("app/public/uploaded/".$m->nama);
			if (file_exists($oldImage)) unlink($oldImage);

			$m->delete();
			Varian::destroy($id);
		});
		
    }
}
