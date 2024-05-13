<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ongkir extends Model
{
    use HasFactory;
	protected $fillable = ['pesanan_grup', 'ekspedisi', 'ongkir', 'is_confirmed_by_admin', 'user_id', 'berat'];

	public function pesanan() {
		return $this->hasMany(Pesanan::class, 'pesanan_grup', 'pesanan_grup');
	}

	public function transaksi() {
		return $this->hasOne(Transaksi::class, 'pesanan_grup', 'pesanan_grup');
	}

	public function pelanggan() {
		return $this->belongsTo(User::class, 'pelanggan_user_id', 'id');
	}
}
