<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Support\Facades\Http;

trait AuthWeb {
	use UserCookie;

	protected function webAuthenticate($token) {
		if(!$token) return false;
		
		$decrypted = $this->getUserCookie($token);
		if(!is_numeric($decrypted)) return false;
	
		$user = User::find($decrypted);
		if(!$user) return false;
	
		return true;
	}
	
	protected function webAuthorization($token, string $role) {
		if(!$token) return false;
		
		$decrypted = $this->getUserCookie($token);
		if(!is_numeric($decrypted)) return false;

		$user = User::find($decrypted);
		if(!$user) return false;

		if($user->role->nama !== $role) return false;

        return true;
	}
}