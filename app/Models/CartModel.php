<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartModel extends Model
{
    use HasFactory;
	protected $table = 'carts';
	protected $fillable = [
        'qty',
        'user_id',
        'varian_id',
    ];

    public function varian()
    {
        return $this->hasOne(Varian::class);
    }

	public function user()
	{
		return $this->hasOne(User::class);
	}
}
