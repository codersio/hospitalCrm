<?php

namespace App\Http\Controllers;

use App\Models\Admin\Admin;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function allSearch()
    {
        return Admin::all();
    }

    public function searchByName(Request $request)
    {
        // return "echo";
        $name = $request->input('name');

        $users = Admin::where('name', 'like', "%$name%")->get();
        // dd($users);

        return response()->json($users);
    }
}
