<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Referralbill;
use App\Models\Admin\ReferralPerson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReferalController extends Controller
{
    public function referral()
    {
        return Inertia::render('Admin/Referral', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function Addreferral()
    {
        return Inertia::render('Admin/addreferral', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function referralStore(Request $request)
    {
        $referral = ReferralPerson::create($request->all());
        // dd($referral);

        if ($referral) {
            return response()->json(['message' => 'File uploaded successfully',  $referral]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referralUpdate(Request $request, $id)
    {
        $referral = ReferralPerson::where('id', $id)->update($request->all());

        if ($referral) {
            return response()->json(['message' => 'File uploaded successfully',  $referral]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referralDelete($id)
    {
        $referral = ReferralPerson::where('id', $id)->delete();

        if ($referral) {
            return response()->json(['message' => 'File uploaded successfully',  $referral]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referralFetch()
    {
        return ReferralPerson::all();
    }

    public function referrablnillStore(Request $request)
    {
        $referral = Referralbill::create($request->all());
        // dd($referral);

        if ($referral) {
            return response()->json(['message' => 'File uploaded successfully',  $referral]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referrablnillUpdate(Request $request, $id)
    {
        $referral = Referralbill::where('id', $id)->update($request->all());

        if ($referral) {
            return response()->json(['message' => 'File uploaded successfully',  $referral]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referrablnillDelete($id)
    {
        $referral = Referralbill::where('id', $id)->delete();

        if ($referral) {
            return response()->json(['message' => 'File uploaded successfully',  $referral]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referrablnillFetch()
    {
        return Referralbill::all();
    }
}
