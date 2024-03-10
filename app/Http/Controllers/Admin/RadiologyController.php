<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Doctor;
use App\Models\Admin\Patient;
use App\Models\Admin\Radiology;
use App\Models\Admin\radiologytest;
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
               'case_id' => $request->case_id,
               'bill_no' => 'RADIO'.str_pad($id, 2, '0', STR_PAD_LEFT),
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
}
