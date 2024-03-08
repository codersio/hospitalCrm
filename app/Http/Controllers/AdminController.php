<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\adminlogin;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function login(adminlogin $request): RedirectResponse
    {
        // dd($request->all());
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function login_page()
    {
        return Inertia::render('Admin/Auth/login');
    }
    // public function create(Request $request){
    //     return Admin::create($request->all());
    // }
    // protected function respondWithToken(string $token)
    // {
    //     return response()->json([
    //         'access_token' => $token,
    //         'token_type' => 'bearer',
    //         // 'expires_in' => auth()->factory()->getTTL() * 60,
    //     ]);
    // }
    // public function login()
    // {
    //     $credentials = request(['email', 'password']);
    //     // dd($credentials);

    //     if (! $token = auth()->guard("admin-api")->attempt($credentials)) {
    //         return response()->json(['error' => 'Unauthorized'], 401);
    //     }

    //     return $this->respondWithToken($token);
    // }

    public function me()
    {
        return response()->json(auth()->guard('admin-api')->user());
    }
}
