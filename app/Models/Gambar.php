<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gambar extends Model
{
    use HasFactory;

    protected $table = 'gambars';
    protected $fillable = ['nama', 'produk_id'];

    function gambar()
    {
        return $this->hasMany(Gambar::class, 'produk_id', 'id');
    }
}
