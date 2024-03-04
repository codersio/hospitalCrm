<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ReferalController extends Controller
{
    public function refarel()
    {
        return Inertia::render('Admin/Referral');
    }
}
