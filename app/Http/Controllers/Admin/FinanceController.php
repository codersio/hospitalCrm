<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class FinanceController extends Controller
{
    public function income()
    {
        return Inertia::render('Admin/income');
    }

    public function expenses()
    {
        return Inertia::render('Admin/expenses');
    }

    public function tpamanagement()
    {
        return Inertia::render('Admin/tpamanagment');
    }
}
