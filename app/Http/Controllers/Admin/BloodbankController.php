<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\bloodbank;
use App\Models\Admin\BloodType;
use App\Models\Admin\RadiologyUnits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function bloodBanksetup()
    {
        return Inertia::render('Admin/bloodbank/bloodBnkproduct', [
               'admin' => Auth::guard('admin-api')->user(),
               'units' => BloodType::all(),
            ]);
    }

    // public function bloodBankproduct()
    // {
    //     return Inertia::render('Admin/bloodbank/bloodBnkproduct', [
    //            'admin' => Auth::guard('admin-api')->user(),
    //            'units' => RadiologyUnits::all(),
    //         ]);
    // }

    public function bloodBankproductStore(Request $request)
    {
        $product = bloodbank::create($request->all());

        return $product;
    }

    public function bloodbankProductUpdate(Request $request, $id)
    {
        $product = bloodbank::find($id)->update($request->all());

        return $product;
    }

    public function bloodbankProductDelete(Request $request, $id)
    {
        $product = bloodbank::find($id)->delete();

        return $product;
    }

    public function bloodbankProductFetch(Request $request)
    {
        return bloodbank::all();
    }

    public function bloobType()
    {
        return Inertia::render('Admin/bloodbank/bloodType', [
               'admin' => Auth::guard('admin-api')->user(),
            //    'units' => RadiologyUnits::all(),
            ]);
    }

    public function bloodbankTypeStore(Request $request)
    {
        $type = BloodType::create($request->all());

        return $type;
    }

    public function bloodbankTypeUpdate(Request $request, $id)
    {
        $type = BloodType::find($id)->update($request->all());

        return $type;
    }

    public function bloodbankTypeDelete(Request $request, $id)
    {
        $type = BloodType::find($id)->delete();

        return $type;
    }

    public function bloodbankTypeFetch(Request $request)
    {
        return BloodType::all();
    }
}
