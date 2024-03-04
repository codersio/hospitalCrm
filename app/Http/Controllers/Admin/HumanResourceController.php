<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HumanResourceController extends Controller
{
    public function humanResource()
    {
        return Inertia::render('Admin/humanResource');
    }
}
