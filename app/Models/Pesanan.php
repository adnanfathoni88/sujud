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

    function varian()
    {
        return $this->belongsTo(Varian::class);
    }

    function user()
    {
        return $this->belongsTo(User::class);
    }

	function ongkir() 
	{
		return $this->hasOne(Ongkir::class, 'pesanan_grup', 'pesanan_grup');
	}
}
