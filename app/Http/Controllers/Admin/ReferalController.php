<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ReferralPerson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReferalController extends Controller
{
    public function referral()
    {
        return Inertia::render('Admin/Referral');
    }

    public function Addreferral()
    {
        return Inertia::render('Admin/addreferral', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function referralStore(Request $request)
    {
        $referral = ReferralPerson::create($request->all());

        if ($referral) {
            return response()->with('success', 'File upload successfull', $referral);
        } else {
            return response()->with('error', 'No file uploaded');
        }
    }

    public function referralUpdate(Request $request, $id)
    {
        $referral = ReferralPerson::where('id', $id)->update($request->all());

        if ($referral) {
            return response()->with('success', 'File upload successfull', $referral);
        } else {
            return response()->with('error', 'No file uploaded');
        }
    }

    public function referralDelete($id)
    {
        $referral = ReferralPerson::where('id', $id)->delete();

        if ($referral) {
            return response()->with('success', 'File upload successfull', $referral);
        } else {
            return response()->with('error', 'No file uploaded');
        }
    }
}
