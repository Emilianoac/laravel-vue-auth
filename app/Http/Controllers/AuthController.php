<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function register(){
        return Inertia::render('Register');
    }

    function registerPost(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'phone' => 'required|numeric',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'lastname' => $validatedData['lastname'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'phone' => $validatedData['phone'],
        ]);

        Auth::login($user);
    }

    function login(){
        return Inertia::render('Login');
    }

    function loginPost(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['errors' => ['email' => 'Credenciales invalidas']], 401);
        }

        return response()->json(['message' => 'Usuario autenticado'], 200);
    }

    function logout(){
        Auth::logout();

        return redirect('login');
    }
}
