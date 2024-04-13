<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Admin;
use App\Models\Admin\Bed;
use App\Models\Admin\BedGroup;
use App\Models\Admin\HospitalchargeCategory;
use App\Models\Admin\Ipdpaatient;
use App\Models\Admin\Patient;
use App\Models\Admin\Symtoms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class IpdController extends Controller
{
    public function index()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/ipdpatients', ['admin' => $admin,
          'doctor' => Admin::where('type', 'Doctor')->get(),
        'charge' => HospitalchargeCategory::join('hospital_charge_types', 'hospital_charge_types.id', '=', 'hospitalcharge_categories.type_id')
        ->select('hospitalcharge_categories.name', 'hospital_charge_types.type_name', 'hospitalcharge_categories.id')->where('type_name', 'OPD')->get(),
        'symtoms' => Symtoms::all(),
        'bedgroup' => BedGroup::all(),
    ]);
    }

    public function ipdStore(Request $request)
    {
        $latestInvoice = Ipdpaatient::latest()->first();

        // Extract the ID and increment it by 1
        $id = $latestInvoice ? $latestInvoice->id + 1 : 1;
        $opd = new Ipdpaatient();

        // Assign other attributes
        $opd->Height = $request->Height;
        $opd->Weight = $request->Weight;
        $opd->admin_type = $request->admin_type;
        $opd->admin_id = $request->admin_id;
        $opd->patient_id = $request->patient_id;
        $opd->BP = $request->BP;
        $opd->Pulse = $request->Pulse;
        $opd->Temperature = $request->Temperature;
        $opd->Respiration = $request->Respiration;
        $opd->Symptoms_Type = $request->Symptoms_Type;
        $opd->Symptoms_Title = $request->Symptoms_Title;
        $opd->Symptoms_Description = $request->Symptoms_Description;
        $opd->Note = $request->Note;
        $opd->Allergies = $request->Allergies;
        $opd->Previous_Medical_Issue = $request->Previous_Medical_Issue;
        $opd->appoint_Date = $request->appoint_Date;
        $opd->Case = $request->Case;
        $opd->Casualty = $request->Casualty;
        $opd->Old_Patient = $request->Old_Patient;
        $opd->TPA = $request->TPA;
        $opd->Reference = $request->Reference;
        $opd->Doctor = $request->Doctor;
        $opd->Charge_Category = $request->Charge_Category;
        $opd->Charge = $request->Charge;
        $opd->Tax = $request->Tax;
        $opd->Standard_Charge = $request->Standard_Charge;
        $opd->Applied_Charge = $request->Applied_Charge;
        $opd->Amount = $request->Amount;
        $opd->Payment_Mode = $request->Payment_Mode;
        $opd->Paid_Amount = $request->Paid_Amount;
        $opd->Live_Consultation = $request->Live_Consultation;
        $opd->bed_number = $request->bed_number;
        $opd->bed_group = $request->bed_number;
        $opd->Credit_Limit = $request->Credit_Limit;

        // Now, set 'ipdno' directly including 'IPDN' and $request->id
        $opd->ipdno = 'IPDN'.$id;

        // Save the model
        $opd->save();

        return response()->json(['message' => 'File uploaded successfully',  $opd]);
    }

    public function ipdFetch()
    {
        return Patient::join('ipdpaatients', 'patients.id', '=', 'ipdpaatients.patient_id')
        ->join('beds', 'beds.id', '=', 'ipdpaatients.bed_number')
        ->join('admins', 'admins.id', '=', 'ipdpaatients.Doctor')
        ->where('type', 'Doctor')
             ->select('admins.name as doctor_name', 'beds.bed_name', 'ipdpaatients.id', 'ipdpaatients.ipdno', 'ipdpaatients.Credit_Limit', 'ipdpaatients.Case', 'ipdpaatients.Previous_Medical_Issue', 'ipdpaatients.patient_id', 'ipdpaatients.Doctor', 'ipdpaatients.appoint_Date', 'patients.name', 'patients.guardian_name', 'patients.gender', 'patients.phone', 'patients.id')->get();
        // dd($user);
    }

    public function bedGroup(Request $request, $id)
    {
        return Bed::where('bed_group_id', $id)->get();
    }
}
