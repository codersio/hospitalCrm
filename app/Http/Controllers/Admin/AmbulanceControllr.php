<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Ambulance;
use App\Models\Admin\AmbulanceList;
use App\Models\Admin\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AmbulanceControllr extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/ambulance', ['admin' => Auth::guard('admin-api')->user(),
        'ambulanceLId' => AmbulanceList::all(),
    ],
        );
    }

    public function AmbulanceBillFetch()
    {
        return Patient::join('ambulances', 'patients.id', '=', 'ambulances.patient_id')
        ->join('ambulance_lists', 'ambulances.vehicle_model_id', '=', 'ambulance_lists.id')
         ->select('ambulances.id', 'ambulance_lists.d_license', 'ambulance_lists.vehicle_model', 'ambulance_lists.d_name',
             'ambulance_lists.d_contact', 'ambulance_lists.vehicle_no', 'ambulances.bill_no', 'ambulances.date', 'ambulances.amount', 'patients.name', 'patients.guardian_name',
             'patients.gender', 'patients.phone')->get();
    }

    public function AmbulanceList()
    {
        return Inertia::render('Admin/ambulancelist', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function AmbulanceBillStore(Request $request)
    {
        $latestInvoice = Ambulance::latest()->first();

        // Extract the ID and increment it by 1
        $id = $latestInvoice ? $latestInvoice->id + 1 : 1;
        $ambulance = Ambulance::create([
            'admin_id' => $request->admin_id,
'patient_id' => $request->patient_id,
'vehicle_model_id' => $request->vehicle_model_id,
'admin_type' => $request->admin_type,
'driver_name' => $request->driver_name,
'date' => $request->date,
'tax' => $request->tax,
'amount' => $request->amount,
'charge_name' => $request->charge_name,
'note' => $request->note,
'ambulance_category_id' => $request->ambulance_category_id,
'discount' => $request->discount,
'net_amount' => $request->net_amount,
'payment_mode' => $request->payment_mode,
'bill_no' => 'AMB'.str_pad($id, 2, '0', STR_PAD_LEFT),
'case_id' => $request->case_id,
        ]);

        if ($ambulance) {
            return response()->json(['message' => 'File uploaded successfully',  $ambulance]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function AmbulancelistStore(Request $request)
    {
        $ambulance = AmbulanceList::create($request->all());
        if ($ambulance) {
            return response()->json(['message' => 'File uploaded successfully',  $ambulance]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function AmbulancelistList()
    {
        return AmbulanceList::all();
    }
}
