<?php

namespace App\Traits;

use Illuminate\Support\Facades\Crypt;

trait UserCookie {
    protected function setUserCookie(int $user_id) {
		return Crypt::encrypt($user_id);
    }

	protected function getUserCookie(string $token) {
		return Crypt::decrypt($token);
	}
}