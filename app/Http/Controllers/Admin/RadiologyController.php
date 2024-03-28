<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Doctor;
use App\Models\Admin\Patient;
use App\Models\Admin\Radiology;
use App\Models\Admin\radiologyCategory;
use App\Models\Admin\radiologyParameters;
use App\Models\Admin\radiologytest;
use App\Models\Admin\RadiologyUnits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RadiologyController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/radiology', [
            'admin' => Auth::guard('admin-api')->user(),
             'doctor' => Doctor::all(), ]);
    }

    public function RadiologyBillFetch()
    {
        return Patient::join('radiologies', 'patients.id', '=', 'radiologies.patient_id')
             ->select('radiologies.id', 'radiologies.bill_no', 'radiologies.report_date',
                 'radiologies.previous_value', 'radiologies.amount',
                 'radiologies.net_amount', 'radiologies.doctor',
                 'radiologies.doctor', 'patients.name', 'patients.guardian_name', 'patients.gender', 'patients.phone')->get();
    }

    public function RadiologyBill(Request $request)
    {
        // $randomNumber = mt_rand(1000, 9999);
        $latestInvoice = Radiology::latest()->first();

        // Extract the ID and increment it by 1
        $id = $latestInvoice ? $latestInvoice->id + 1 : 1;

        $pathologybill = Radiology::create([
                'admin_type' => $request->admin_type,
               'admin_id' => $request->admin_id,
               'patient_id' => $request->patient_id,
               'pathology_category_id' => $request->pathology_category_id,
               'report_days' => $request->report_days,
               'report_date' => $request->report_date,
               'tax' => $request->tax,
               'amount' => $request->amount,
               'doctor' => $request->doctor,
               'note' => $request->note,
               'previous_value' => $request->previous_value,
               'discount' => $request->discount,
               'net_amount' => $request->net_amount,
               'payment_mode' => $request->payment_mode,
               'date' => $request->date,
               'case_id' => 'ADR',
               'bill_no' => 'RADIO',
           ]);
        if ($pathologybill) {
            return response()->json(['message' => 'File uploaded successfully',  $pathologybill]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function RadiologyTest()
    {
        return Inertia::render('Admin/radiologyTest', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function RadiologyTeststore(Request $request)
    {
        $pathologyTest = radiologytest::create($request->all());
        if ($pathologyTest) {
            return response()->json(['message' => 'File uploaded successfully',  $pathologyTest]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function RadiologyTestList()
    {
        return radiologytest::all();
    }

    // pathology category setup
    public function radiologyCategory()
    {
        return Inertia::render('Admin/radiologysetup/radiologyCategory', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function radiologycategoryStore(Request $request)
    {
        $radiologyCategory = radiologyCategory::create($request->all());
        if ($radiologyCategory) {
            return response()->json(['message' => 'File uploaded successfully',  $radiologyCategory]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function radiologycategoryFetch()
    {
        return radiologyCategory::all();
    }

    public function radiologycategoryEdit($id)
    {
        return radiologyCategory::find($id);
    }

    public function radiologycategoryUpdate(Request $request, $id)
    {
        $radiologyCategory = radiologyCategory::find($id);
        $radiologyCategory->update($request->all());
        if ($radiologyCategory) {
            return response()->json(['message' => 'File uploaded successfully',  $radiologyCategory]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function radiologycategoryDelete($id)
    {
        $radiologyCategory = radiologyCategory::find($id);
        $radiologyCategory->delete();
        if ($radiologyCategory) {
            return response()->json(['message' => 'File uploaded successfully',  $radiologyCategory]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    // pathology units

    public function radiologyUnit()
    {
        return Inertia::render('Admin/radiologysetup/radiologyUnit', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function radiologyUnitStore(Request $request)
    {
        $pathologyUnit = RadiologyUnits::create($request->all());
        if ($pathologyUnit) {
            return response()->json(['message' => 'File uploaded successfully',  $pathologyUnit]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function radiologyUnitFetch()
    {
        return RadiologyUnits::all();
    }

    public function pathologyUnitEdit($id)
    {
        return RadiologyUnits::find($id);
    }

    public function radiologyUnitUpdate(Request $request, $id)
    {
        $pathologyUnit = RadiologyUnits::find($id);
        $pathologyUnit->update($request->all());
        if ($pathologyUnit) {
            return response()->json(['message' => 'File uploaded successfully',  $pathologyUnit]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function radiologyUnitDelete($id)
    {
        $pathologyUnit = RadiologyUnits::find($id);
        $pathologyUnit->delete();
        if ($pathologyUnit) {
            return response()->json(['message' => 'File uploaded successfully',  $pathologyUnit]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    // radiologyParameters
    public function radiologyParameter()
    {
        return Inertia::render('Admin/radiologysetup/radiologyParameter',
            [
               'admin' => Auth::guard('admin-api')->user(),
               'units' => RadiologyUnits::all(),
            ]
        );
    }

    public function radiologyParametersStore(Request $request)
    {
        $radiologyParameters = radiologyParameters::create($request->all());
        if ($radiologyParameters) {
            return response()->json(['message' => 'File uploaded successfully',  $radiologyParameters]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function radiologyParametersFetch()
    {
        return radiologyParameters::all();
    }

    public function radiologyParametersEdit($id)
    {
        return radiologyParameters::find($id);
    }

    public function radiologyParametersUpdate(Request $request, $id)
    {
        $radiologyParameters = radiologyParameters::find($id);
        $radiologyParameters->update($request->all());
        if ($radiologyParameters) {
            return response()->json(['message' => 'File uploaded successfully',  $radiologyParameters]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function radiologyParametersDelete($id)
    {
        $radiologyParameters = radiologyParameters::find($id);
        $radiologyParameters->delete();
        if ($radiologyParameters) {
            return response()->json(['message' => 'File uploaded successfully',  $radiologyParameters]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }
}
