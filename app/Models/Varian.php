<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Varian extends Model
{
    use HasFactory;

    protected $table = 'varians';

    protected $fillable = [
        'ukuran',
        'warna',
        'harga',
        'stok',
        'produk_id',
    ];

	public function produk()
	{
		return $this->belongsTo(Produk::class);
	}

	public function gambar()
	{
		return $this->hasOne(Gambar::class);
	}
}
