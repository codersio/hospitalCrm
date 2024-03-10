<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Doctor;
use App\Models\Admin\PathologyBill;
use App\Models\Admin\Pathologytest;
use App\Models\Admin\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PathologyController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Pathology', [
             'admin' => Auth::guard('admin-api')->user(),
             'doctor' => Doctor::all(),
        ]);
    }

    public function pathologyBillFetch()
    {
        return Patient::join('pathology_bills', 'patients.id', '=', 'pathology_bills.patient_id')
             ->select('pathology_bills.id', 'pathology_bills.bill_no', 'pathology_bills.report_date',
                 'pathology_bills.previous_value', 'pathology_bills.amount',
                 'pathology_bills.net_amount', 'pathology_bills.doctor',
                 'pathology_bills.doctor', 'patients.name', 'patients.guardian_name', 'patients.gender', 'patients.phone')->get();
    }

    public function PathologyBill(Request $request)
    {
        // $randomNumber = mt_rand(1000, 9999);
        $latestInvoice = PathologyBill::latest()->first();

        // Extract the ID and increment it by 1
        $id = $latestInvoice ? $latestInvoice->id + 1 : 1;

        $pathologybill = PathologyBill::create([
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
               'bill_no' => 'PATHO'.str_pad($id, 2, '0', STR_PAD_LEFT),
           ]);
        if ($pathologybill) {
            return response()->json(['message' => 'File uploaded successfully',  $pathologybill]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function PathologyTest()
    {
        return Inertia::render('Admin/pathologyTest', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function PathologyTeststore(Request $request)
    {
        $pathologyTest = Pathologytest::create($request->all());
        if ($pathologyTest) {
            return response()->json(['message' => 'File uploaded successfully',  $pathologyTest]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function PathologyTestList()
    {
        return Pathologytest::all();
    }
}
