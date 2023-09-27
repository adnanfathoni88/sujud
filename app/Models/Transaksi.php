<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;
    protected $table = "transaksis";
    protected $fillable = [
        'kode',
        'tgl_bayar',
        'metode',
        'status',
        'total',
        'pesanan_id',
    ];

    function pesanan()
    {
        return $this->belongsTo(Pesanan::class);
    }
}
