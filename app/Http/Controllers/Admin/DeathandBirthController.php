<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DeathandBirthController extends Controller
{
    public function deathRecord()
    {
        return Inertia::render('Admin/deathRecord');
    }

    public function birthRecord()
    {
        return Inertia::render('Admin/birthRecord');
    }
}
