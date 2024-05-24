<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ongkir extends Model
{
    use HasFactory;
	protected $fillable = ['pesanan_grup', 'ekspedisi', 'ongkir', 'resi', 'telah_sampai', 'is_confirmed_by_admin', 'pelanggan_user_id', 'berat'];

	function pesanan_single() {
		return $this->hasOne(Pesanan::class, 'pesanan_grup', 'pesanan_grup');
	}

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
