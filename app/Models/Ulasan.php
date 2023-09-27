<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ulasan extends Model
{
    use HasFactory;

    protected $table = "ulasans";

    protected $fillable = [
        'tgl_ulasan',
        'konten',
        'rating',
        'produk_id',
        'user_id',
    ];

    function produk()
    {
        return $this->belongsTo(Produk::class);
    }
}
