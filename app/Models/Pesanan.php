<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    use HasFactory;
    protected $table = "pesanans";

    protected $fillable = [
        'kode',
        'tgl_pesan',
        'status_bayar',
        'status_kirim',
        'total',
        'alamat',
        'produk_id',
        'user_id',
    ];

    function produk()
    {
        return $this->belongsTo(Produk::class);
    }

    function user()
    {
        return $this->belongsTo(User::class);
    }
}
