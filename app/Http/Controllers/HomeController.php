<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    function home(){
        return Inertia::render('Home', [
            'user' => Auth::user()
        ]);
    }
}
