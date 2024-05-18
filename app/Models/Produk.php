<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;
    protected $table = 'produks';
    protected $fillable = ['kode', 'nama', 'deskripsi'];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class);
    }

    // public function ulasan()
    // {
    //     return $this->hasMany(Ulasan::class);
    // }

    // public function pesanan()
    // {
    //     return $this->hasMany(Pesanan::class);
    // }
    public function varians()
    {
        return $this->hasMany(Varian::class);
    }

	function varian()
	{
		return $this->hasOne(Varian::class);
	}
}
