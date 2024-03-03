<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IpdController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/ipdpatients');
    }
}
