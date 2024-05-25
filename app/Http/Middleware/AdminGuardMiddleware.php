<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Traits\ResponseFormat;
use App\Traits\UserCookie;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminGuardMiddleware
{
    use ResponseFormat, UserCookie;
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie('token');
        if (!$token) return $this->res("unauthenticated", 401);

        $decrypted = $this->getUserCookie($token);
        if (!is_numeric($decrypted)) return $this->res("unauthenticated", 401);

        $user = User::find($decrypted);
        if (!$user) return $this->res("unauthenticated", 401);

        if ($user->role->nama !== 'admin') return $this->res("unauthorized", 403);

        return $next($request);
    }
}
