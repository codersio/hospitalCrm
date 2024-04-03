<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\CommissionRefarral;
use App\Models\Admin\Referralbill;
use App\Models\Admin\Referralcategory;
use App\Models\Admin\ReferralPerson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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

    public function Referalcategory()
    {
        return Inertia::render('Admin/referalsetup/referalcategory', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function ReferralCategoryStore(Request $request)
    {
        $category = Referralcategory::create($request->all());
        // dd($category);

        if ($category) {
            return response()->json(['message' => 'File uploaded successfully',  $category]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function ReferralCategoryUpdate(Request $request, $id)
    {
        $category = Referralcategory::find($id);
        $category->update($request->all());
        if ($category) {
            return response()->json(['message' => 'File uploaded successfully',  $category]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function ReferralCategoryDelete(Request $request, $id)
    {
        $category = Referralcategory::find($id);
        $category->delete();
        if ($category) {
            return response()->json(['message' => 'File uploaded successfully',  $category]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function ReferralCategoryFetch()
    {
        return Referralcategory::all();
    }

    public function ReferralCommission()
    {
        return Inertia::render('Admin/referalsetup/referralcommission',
            ['admin' => Auth::guard('admin-api')->user(),
        'category' => Referralcategory::all(),
        ]);
    }

    public function referralCommissionStore(Request $request)
    {
        $commission = CommissionRefarral::create($request->all());
        // dd($commission);

        if ($commission) {
            return response()->json(['message' => 'File uploaded successfully',  $commission]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referralCommissionUpdate(Request $request, $id)
    {
        $commission = CommissionRefarral::find($id);
        $commission->update($request->all());
        if ($commission) {
            return response()->json(['message' => 'File uploaded successfully',  $commission]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referralCommissionDelete(Request $request, $id)
    {
        $commission = CommissionRefarral::find($id);
        $commission->delete();
        if ($commission) {
            return response()->json(['message' => 'File uploaded successfully',  $commission]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function referralCommissionFetch()
    {
        return DB::table('commission_refarrals')

    ->select(
        'commission_refarrals.id',
        'commission_refarrals.opd',
        'commission_refarrals.ipd',
        'commission_refarrals.pharmacy',
        'commission_refarrals.ambulance',
        'commission_refarrals.radiology',
        'referralcategories.referral_cate_name'
    )
    ->join('referralcategories', 'commission_refarrals.category_id', '=', 'referralcategories.id')
    ->get();
        // dd($referrals);
    }
}
