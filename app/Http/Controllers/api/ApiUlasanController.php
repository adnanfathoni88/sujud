<?php

namespace App\Http\Controllers\api;

use App\Models\Ulasan;
use App\Models\Varian;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class ApiUlasanController extends Controller
{
	use ResponseFormat, UserCookie;

	function ulasan_by_varian(Request $request, string $id_varian) 
	{
		$userId = $this->getUserCookie($request->cookie('token'));
		$m = Ulasan::where('varian_id', $id_varian)
			->where('user_id', $userId)
			->first();
		return $this->res($m, 200);
	}

	function ulasan_by_produk(Request $request) 
	{
		$id_produk = $request->query('id_produk');
		$varians = Varian::select('id')->where('produk_id', $id_produk)->get();
		$ulasan = Ulasan::whereIn('varian_id', $varians->pluck('id'))->orderBy('rating', 'DESC')
			->where('parent_id', null)
			->with('user:id,nama,gambar_id', 'user.gambar:id,nama')
			->paginate(15);
		return $this->res($ulasan, 200);
	}

    /**
     * Store a newly created resource in storage.
     */
    public function store_by_varian(Request $request, string $id_varian)
    {
		$userId = $this->getUserCookie($request->cookie('token'));
		$validator = Validator::make(array_merge(["varian_id" => $id_varian], $request->all()), [
			// ulasan
			'konten' => 'string|max:255',
			'rating' => 'required|numeric|min:1|max:5',
			// varian
			'varian_id' => 'required|exists:varians,id',
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$m = new Ulasan();
		$m->konten = $request->konten;
		$m->rating = $request->rating;
		$m->varian_id = $id_varian;
		$m->user_id = $userId;
		$m->save();

		return $this->res("Success", 201);
    }

    // /**
    //  * Update the specified resource in storage.
    //  */
    public function update(Request $request, string $id)
    {
        $userId = $this->getUserCookie($request->cookie('token'));

		$validator = Validator::make($request->all(), [
			// ulasan
			'konten' => 'string|max:255',
			'rating' => 'required|numeric|min:1|max:5',
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$m = Ulasan::where('id', $id)->where('user_id', $userId)->first();
		if(!$m) return $this->res("Not Found", 404);
		
		$m->konten = $request->konten;
		$m->rating = $request->rating;
		$m->save();

		return $this->res("Success", 201);
    }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    public function destroy(Request $request, string $id)
    {	
		$userId = $this->getUserCookie($request->cookie('token'));
		Ulasan::where('id', $id)->where('user_id', $userId)->delete();
		return $this->res("Success", 201);
    }
}
