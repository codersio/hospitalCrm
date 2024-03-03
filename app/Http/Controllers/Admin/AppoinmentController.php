<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppoinmentController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Appoinment');
    }
}
