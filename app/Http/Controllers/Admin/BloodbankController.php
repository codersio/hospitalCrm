<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class BloodbankController extends Controller
{
    public function bloodbank()
    {
        return Inertia::render('Admin/Bloodbank');
    }

    public function blooddonor()
    {
        return Inertia::render('Admin/bloodDonor');
    }

    public function bloodissue()
    {
        return Inertia::render('Admin/bloodissue');
    }

    public function componentissue()
    {
        return Inertia::render('Admin/componentissue');
    }

    public function componentlist()
    {
        return Inertia::render('Admin/componentlist');
    }
}
