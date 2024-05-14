<?php

namespace App\Http\Controllers\api;

use App\Models\Kategori;
use App\Traits\ResponseFormat;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiKategoriController extends Controller
{
  use ResponseFormat;
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $m = Kategori::all();
    return $this->res($m, 200);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'nama' => 'required|max:255',
    ]);
    if ($validator->fails()) return $this->res($validator->messages(), 400);

    $m = new Kategori();
    $m->nama = $request->nama;
    $m->save();

    return $this->res("Success", 201);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $m = Kategori::find($id);
    if (!$m) return $this->res("Kategori not found", 404);

    return $this->res($m, 201);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $validator = Validator::make($request->all(), [
      'nama' => 'required|max:255',
    ]);
    if ($validator->fails()) return $this->res($validator->messages(), 400);

    $m = Kategori::find($id);
    if (!$m) return $this->res("Kategori not found", 404);

    $m->nama = $request->nama;
    $m->save();

    return $this->res("Success", 201);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    Kategori::destroy($id);
    return $this->res("Success Delete", 201);
  }
}
