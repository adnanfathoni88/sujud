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
        'parent_id',
		'is_replied'
    ];

    public function produk()
    {
        return $this->belongsTo(Produk::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function balasan()
    {
        return $this->hasMany(Ulasan::class, 'parent_id');
    }
}
