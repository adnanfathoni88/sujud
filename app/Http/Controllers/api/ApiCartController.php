<?php

namespace App\Http\Controllers\api;

use App\Models\CartModel;
use App\Models\Varian;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class ApiCartController extends Controller
{
	use ResponseFormat, UserCookie;
	/**
	 * Display a listing of the resource.
	 */
	public function index(Request $request, string $id_produk, string $id_varian)
	{
		$userId = $this->getUserCookie($request->cookie('token'));
		$m = CartModel::where('user_id', $userId)->get();
		return $this->res($m, 200);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request, string $id_produk, string $id_varian)
	{
		$validator = Validator::make(array_merge(['varian_id' => $id_varian], $request->all()), [
			'qty' => 'required|max:255|numeric|min:0',
			'varian_id' => 'required|exists:varians,id',
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$v = Varian::find($id_varian);
		dd($v->stok);
		if($v->stok < $request->qty) return $this->res("Out of stock", 400);

		$m = new CartModel();
		$m->qty = $request->qty;
		$m->varian_id = $id_varian;
		$m->user_id = $this->getUserCookie($request->cookie('token'));
		$m->save();

		return $this->res("Success", 201);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id_produk, string $id_varian, string $id)
	{
		$m = CartModel::find($id);
		if (!$m) return $this->res("Data not found", 404);

		return $this->res($m, 201);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, string $id_produk, string $id_varian, string $id)
	{
		$validator = Validator::make($request->all(), [
			'qty' => 'required|max:255|numeric|min:0',
		]);
		if ($validator->fails()) return $this->res($validator->messages(), 400);

		$v = Varian::find($id_varian);
		if($v->stok < $request->qty) return $this->res("Out of stock", 400);

		$m = CartModel::find($id);
		if (!$m) return $this->res("Data not found", 404);

		$m->qty = $request->qty;
		$m->save();

		return $this->res("Success", 201);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(string $id_produk, string $id_varian, string $id)
	{
		CartModel::destroy($id);
		return $this->res("Success Delete", 201);
	}
}
