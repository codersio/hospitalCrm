<?php

namespace App\Http\Controllers\Admin\setup;

use App\Http\Controllers\Controller;
use App\Models\Admin\HospitalchargeUnit;
use App\Models\Admin\HospitalTaxCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SetupController extends Controller
{
    public function HospitalchargeSetup()
    {
        return Inertia::render('Admin/hospitalsetup/hospitalChargesunits', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function hospitalChargeUnitStore(Request $request)
    {
        $unist = HospitalchargeUnit::create($request->all());
        if ($unist) {
            return response()->json(['message' => 'File uploaded successfully',  $unist]);
        }
    }

    public function hospitalChargeUnitUpdate(Request $request, $id)
    {
        $unist = HospitalchargeUnit::where('id', $id)->update($request->all());
        if ($unist) {
            return response()->json(['message' => 'File uploaded successfully',  $unist]);
        }
    }

    public function hospitalChargeUnitDelete(Request $request, $id)
    {
        $unist = HospitalchargeUnit::find($id)->delete();
        if ($unist) {
            return response()->json(['message' => 'File uploaded successfully',  $unist]);
        }
    }

    public function hospitalChargeUnitFetch(Request $request)
    {
        return HospitalchargeUnit::all();
    }

    public function HospitalTaxSetup()
    {
        return Inertia::render('Admin/hospitalsetup/hospitalTaxcategory', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function taxCategoryStore(Request $request)
    {
        $taxCategory = new HospitalTaxCategory();

        // Populate its properties
        $taxCategory->admin_id = $request->admin_id;
        $taxCategory->admin_type = $request->admin_type;
        $taxCategory->name = $request->name;
        $taxCategory->number = $request->number;
        $taxCategory->save();

        return $taxCategory;
    }

    public function taxCategoryUpdate(Request $request, $id)
    {
        $taxCategory = HospitalTaxCategory::find($id);

        // Populate its properties
        $taxCategory->admin_id = $request->admin_id;
        $taxCategory->admin_type = $request->admin_type;
        $taxCategory->name = $request->name;
        $taxCategory->number = $request->number;
        $taxCategory->save();

        return $taxCategory;
    }

    public function taxCategoryDelete(Request $request, $id)
    {
        $taxCategory = HospitalTaxCategory::find($id);
        $taxCategory->delete();

        return $taxCategory;
    }

    public function taxCategoryFetch(Request $request)
    {
        return HospitalTaxCategory::all();
    }
}
