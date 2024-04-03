<?php

namespace App\Http\Controllers\Admin\setup;

use App\Http\Controllers\Controller;
use App\Models\Admin\HospitalchargeCategory;
use App\Models\Admin\HospitalCharges;
use App\Models\Admin\HospitalChargeType;
use App\Models\Admin\HospitalchargeUnit;
use App\Models\Admin\HospitalTaxCategory;
use App\Models\Admin\Symtoms;
use App\Models\Admin\Symtomshead;
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

    public function HospitalchargeTypeSetup()
    {
        return Inertia::render('Admin/hospitalsetup/hopitalChargeType', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function hospitalchargetypeStore(Request $request)
    {
        $type = HospitalChargeType::create($request->all());
        if ($type) {
            return response()->json(['message' => 'File uploaded successfully',  $type]);
        }
    }

    public function hospitalchargetypeUpdate(Request $request, $id)
    {
        $type = HospitalChargeType::find($id)->update($request->all());
        if ($type) {
            return response()->json(['message' => 'File uploaded successfully',  $type]);
        }
    }

    public function hospitalchargetypeDelete(Request $request, $id)
    {
        $type = HospitalChargeType::find($id)->delete();
        if ($type) {
            return response()->json(['message' => 'File uploaded successfully',  $type]);
        }
    }

    public function hospitalchargetypeFetch(Request $request)
    {
        return HospitalChargeType::all();
    }

    public function hospitalcategoryInex()
    {
        return Inertia::render('Admin/hospitalsetup/hospitalChargeCategory', ['admin' => Auth::guard('admin-api')->user(),
    'chargetype' => HospitalChargeType::all(),
    ]);
    }

    public function hospitalchargeCategoryStore(Request $request)
    {
        $category = HospitalchargeCategory::create($request->all());
        if ($category) {
            return response()->json(['message' => 'File uploaded successfully',  $category]);
        }
    }

    public function hospitalchargeCategoryUpdate(Request $request, $id)
    {
        $category = HospitalchargeCategory::find($id)->update($request->all());
        if ($category) {
            return response()->json(['message' => 'File uploaded successfully',  $category]);
        }
    }

    public function hospitalchargeCategoryDelete(Request $request, $id)
    {
        $category = HospitalchargeCategory::find($id)->delete();
        if ($category) {
            return response()->json(['message' => 'File uploaded successfully',  $category]);
        }
    }

    public function hospitalchargeCategoryFetch(Request $request)
    {
        return HospitalchargeCategory::all();
    }

    public function HospitalCharge()
    {
        return Inertia::render('Admin/hospitalsetup/hospitalcharge', ['admin' => Auth::guard('admin-api')->user(), 'chargetype' => HospitalChargeType::all()]);
    }

    public function hospitalchargeCategoryId(Request $request, $id)
    {
        $category = HospitalchargeCategory::where('type_id', $id)->get();

        return response()->json($category);
    }

    public function hospitalchargeStore(Request $request)
    {
        $hospitalCharge = new HospitalCharges();

        $hospitalCharge->admin_id = $request->admin_id;
        $hospitalCharge->admin_type = $request->admin_type;
        $hospitalCharge->charge_type_id = $request->charge_type_id;
        $hospitalCharge->charge_category_id = $request->charge_category_id;
        $hospitalCharge->unit_id = $request->unit_id;
        $hospitalCharge->charge_name = $request->charge_name;
        $hospitalCharge->charge_tax_id = $request->charge_tax_id;
        $hospitalCharge->tax = $request->tax;
        $hospitalCharge->stander_charge = $request->stander_charge;
        $hospitalCharge->description = $request->description;

        $hospitalCharge->save();

        return $hospitalCharge;
    }

    public function hospitalchargeUpdate(Request $request, $id)
    {
        $hospitalCharge = HospitalCharges::find($id);

        $hospitalCharge->admin_id = $request->admin_id;
        $hospitalCharge->admin_type = $request->admin_type;
        $hospitalCharge->charge_type_id = $request->charge_type_id;
        $hospitalCharge->charge_category_id = $request->charge_category_id;
        $hospitalCharge->unit_id = $request->unit_id;
        $hospitalCharge->charge_name = $request->charge_name;
        $hospitalCharge->charge_tax_id = $request->charge_tax_id;
        $hospitalCharge->tax = $request->tax;
        $hospitalCharge->stander_charge = $request->stander_charge;
        $hospitalCharge->description = $request->description;

        $hospitalCharge->save();

        return $hospitalCharge;
    }

    public function hospitalchargeDelete(Request $request, $id)
    {
        $hospitalCharge = HospitalCharges::find($id);
        $hospitalCharge->delete();

        return $hospitalCharge;
    }

    public function hospitalchargeFetch(Request $request)
    {
        return HospitalCharges::all();
    }

    public function symtoms()
    {
        return Inertia::render('Admin/symtoms/symtome', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function symtomsStore(Request $request)
    {
        $symtoms = Symtoms::create($request->all());

        return $symtoms;
    }

    public function symtomsUpdate(Request $request, $id)
    {
        $symtoms = Symtoms::find($id)->update($request->all());

        return $symtoms;
    }

    public function symtomsDelete(Request $request, $id)
    {
        $symtoms = Symtoms::find($id)->delete();

        return $symtoms;
    }

    public function symtomsFetch(Request $request)
    {
        return Symtoms::all();
    }

    public function symtomsHead()
    {
        return Inertia::render('Admin/symtoms/symtomhead',
            [
                'admin' => Auth::guard('admin-api')->user(),
               'symtoms' => Symtoms::all(),
            ]
        );
        // return Inertia::render('Admin/symtoms/symtomhead', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function symtomsHeadStore(Request $request)
    {
        $symtomsHead = Symtomshead::create($request->all());

        return $symtomsHead;
    }

    public function symtomsHeadUpdate(Request $request, $id)
    {
        $symtomsHead = Symtomshead::find($id)->update($request->all());

        return $symtomsHead;
    }

    public function symtomsHeadDelete(Request $request, $id)
    {
        $symtomsHead = Symtomshead::find($id)->delete();

        return $symtomsHead;
    }

    public function symtomsHeadFetch(Request $request)
    {
        return Symtomshead::all();
    }
}
