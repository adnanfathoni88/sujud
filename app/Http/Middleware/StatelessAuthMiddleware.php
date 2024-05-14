<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\HttpFoundation\Response;

class StatelessAuthMiddleware
{
    use ResponseFormat, UserCookie;
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // $token = $request->cookie('token');
        // if(!$token) return $this->res("unauthenticated", 401);

        // $decrypted = $this->getUserCookie($token);
        // if(!is_numeric($decrypted)) return $this->res("unauthenticated", 401);

        // $user = User::find($decrypted);
        // if(!$user) return $this->res("unauthenticated", 401);

        return $next($request);
    }
}
