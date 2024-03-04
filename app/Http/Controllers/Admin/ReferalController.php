<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ReferalController extends Controller
{
    public function referral()
    {
        return Inertia::render('Admin/Referral');
    }

    public function Addreferral()
    {
        return Inertia::render('Admin/addreferral');
    }
}
