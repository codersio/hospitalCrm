<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Ipdpaatient;
use App\Models\Admin\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class IpdController extends Controller
{
    public function index()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/ipdpatients', ['admin' => $admin]);
    }

    public function ipdStore(Request $request)
    {
        // dd($request->all());
        $opd = Ipdpaatient::create([
            'Height' => $request->Height,

            'Weight' => $request->Weight,
            'admin_type' => $request->admin_type,
            'admin_id' => $request->admin_id,
            'patient_id' => $request->patient_id,
            'BP' => $request->BP,
            'Pulse' => $request->Pulse,
            'Temperature' => $request->Temperature,
            'Respiration' => $request->Respiration,
            'Symptoms_Type' => $request->Symptoms_Type,
            'Symptoms_Title' => $request->Symptoms_Title,
            'Symptoms_Description' => $request->Symptoms_Description,
            'Note' => $request->Note,
            ' Allergies' => $request->Allergies,
            'Previous_Medical_Issue' => $request->Previous_Medical_Issue,
            'appoint_Date' => $request->appoint_Date,
            'Case' => $request->Case,
            'Casualty' => $request->Casualty,
            'Old_Patient' => $request->Old_Patient,
            'TPA' => $request->TPA,
            'Reference' => $request->Reference,
            'Doctor' => $request->Doctor,
            'Charge_Category' => $request->Charge_Category,
            'Charge' => $request->Charge,
            'Tax' => $request->Tax,
            'Standard_Charge' => $request->Standard_Charge,
            'Applied_Charge' => $request->Applied_Charge,
            'Amount' => $request->Amount,
            'Payment_Mode' => $request->Payment_Mode,
            'Paid_Amount' => $request->Paid_Amount,
            'Live_Consultation' => $request->Live_Consultation,
            'bed_number' => $request->bed_number,
            'bed_group' => $request->bed_number,
            'Credit_Limit' => $request->Credit_Limit,
        ]);

        return response()->json(['message' => 'File uploaded successfully',  $opd]);
    }

    public function ipdFetch()
    {
        return Patient::join('ipdpaatients', 'patients.id', '=', 'ipdpaatients.patient_id')
             ->select('ipdpaatients.id', 'ipdpaatients.Credit_Limit', 'ipdpaatients.Case', 'ipdpaatients.bed_number', 'ipdpaatients.Previous_Medical_Issue', 'ipdpaatients.patient_id', 'ipdpaatients.Doctor', 'ipdpaatients.appoint_Date', 'patients.name', 'patients.guardian_name', 'patients.gender', 'patients.phone', 'patients.id')->get();
        // dd($user);
    }
}
