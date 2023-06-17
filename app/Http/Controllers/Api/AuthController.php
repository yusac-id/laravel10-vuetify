<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = [
            'username' => $request->username,
            'password' => $request->password,
        ];
        if (Auth::attempt($credentials)) {
            $user = User::where('username', $request->username)->first();
            if (auth('sanctum')->check()) {
                auth()->user()->tokens()->delete();
            }
            $ability = $user->role;
            $token = $user->createToken(env('TOKEN_NAME', 'MyApp'), [$ability]);
            return response()->json(['token' => $token->plainTextToken, 'user' => $user]);
        } else {
            throw new HttpException(422, "Credentials are not matched");
        }
    }
}