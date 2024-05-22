<?php

namespace App\Http\Controllers\api;

use App\Models\Ulasan;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ApiUlasanReplyController extends Controller
{
	use ResponseFormat, UserCookie;

	public function user_ulasan() 
	{
		return $this->res(Ulasan::where('parent_id', null)->orderBy('is_replied', 'ASC')->paginate(15), 200);
	}

    
    public function store(Request $request, string $parent_ulasan_id, string $id_varian)
    {
		$userId = $this->getUserCookie($request->cookie('token'));
		$validator = Validator::make(array_merge(["parent_id" => $parent_ulasan_id,"varian_id" => $id_varian], $request->all()), [
			// ulasan
			'konten' => 'required|max:255',
			// varian
			'varian_id' => 'required|exists:varians,id',
			// parent
			'parent_id' => 'required|exists:ulasans,id',
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 400);

		
		$parent = Ulasan::where('id', $parent_ulasan_id)->where('is_replied', 0)->first();
		if(!$parent) return $this->res("Ulasan telah direply", 404);

		DB::transaction(function() use($id_varian, $parent_ulasan_id, $userId, $parent, $request) {
			$m = new Ulasan();
			$m->rating = 0;
			$m->user_id = $userId;
			$m->varian_id = $id_varian;
			$m->konten = $request->konten;
			$m->parent_id = $parent_ulasan_id;
			
			$m->save();

			$parent->is_replied = 1;
			$parent->save();
		});

		return $this->res("Success", 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $user_ulasan_id)
    {
		$m = Ulasan::where('parent_id', $user_ulasan_id)->first();
		if(!$m) return $this->res("Not Found", 404);

		return $this->res($m, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $userId = $this->getUserCookie($request->cookie('token'));
		$validator = Validator::make($request->all(), [
			// ulasan
			'konten' => 'required|max:255',
		]);

		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$m = Ulasan::where('id', $id)->where('user_id', $userId)->first();
		if(!$m) return $this->res("Not Found", 404);
		
		$m->konten = $request->konten;
		$m->rating = 0;
		$m->save();

		return $this->res("Success", 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {	
		$userId = $this->getUserCookie($request->cookie('token'));
		$m = Ulasan::where('id', $id)->where('user_id', $userId)->first();
		if(!$m) return $this->res("Not Found", 404);

		$m2 = Ulasan::where('id', $m->parent_id)->first();
		if(!$m2) return $this->res("Not Found", 404);

		DB::transaction(function() use($m, $m2) {
			$m2->is_replied = 0;
			$m2->save();
			$m->delete();
		});


		return $this->res("Success", 201);
    }
}
