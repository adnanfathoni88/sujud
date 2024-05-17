<?php

namespace App\Http\Controllers\api;

// use App\Http\Controllers\Controller;

use App\Models\Gambar;
use App\Models\Produk;
use App\Models\Varian;
use App\Traits\ResponseFormat;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApiProductController extends Controller
{
	use ResponseFormat;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
		$subselect = DB::raw("(SELECT gambars.nama FROM varians JOIN gambars ON gambars.varian_id = varians.id WHERE produk_id = produks.id LIMIT 1) as thumbnail");
		$m = Produk::select("*", $subselect)
			->paginate(15);

		return $this->res($m, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
		$validator = Validator::make($request->all(), [
			// produk
			'kode' => 'required|max:255',
			'nama' => 'required|max:255',
			'deskripsi' => 'required|max:255',
			'kategori_id' => 'required|exists:kategoris,id',
			// varian
			'warna' => 'required|max:255',
			'ukuran' => 'required|max:255',
			'harga' => 'required|numeric|min:0',
			'stok' => 'required|numeric|min:1',
			// image
			'image' => 'required|image|mimes:jpeg,png|max:3072'
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 400);

		
		$file = $request->file('image');
		$filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
		$file->storeAs('uploaded', $filename, 'public');
		
		DB::transaction(function () use($request, $filename) {
			$m = new Produk();
			$m->nama = $request->nama;
			$m->kode = $request->kode;
			$m->deskripsi = $request->deskripsi;
			$m->kategori_id = $request->kategori_id;
			$m->save();
			
			$m2 = new Varian();
			$m2->stok = $request->stok;
			$m2->harga = $request->harga;
			$m2->warna = $request->warna;
			$m2->ukuran = $request->ukuran;
			$m2->produk_id = $m->id;
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
    public function show(string $id)
    {
		$m = Produk::find($id);
		if(!$m) return $this->res("Produk not found", 404);

		return $this->res($m, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
			'kode' => 'required|max:255',
			'nama' => 'required|max:255',
			'deskripsi' => 'required|max:255',
			'kategori_id' => 'required|exists:kategoris,id'
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 401);

		$m = Produk::find($id);
		if(!$m) return $this->res("Produk not found", 404);

        $m->nama = $request->nama;
        $m->kode = $request->kode;
        $m->deskripsi = $request->deskripsi;
        $m->kategori_id = $request->kategori_id;
        $m->save();

		return $this->res($m, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Produk::destroy($id);
		return $this->res("Success Delete", 201);
    }
}
