<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Appoinment;
use App\Models\Admin\Department;
use App\Models\Admin\Doctor;
use App\Models\Admin\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AppoinmentController extends Controller
{
    public function index()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/Appoinment', ['admin' => $admin]);
    }

    public function Store(Request $request)
    {
        // $this->validate($request, [
        // ' patient_id' => 'required',
        // 'doctor' => 'required',
        // 'doctor' => 'required',
        // 'doctor_fees' => 'required',
        // 'doctor_fees' => 'required',
        // 'appoinment_date' => 'required',

        // 'slot' => 'required',
        // ]);
        $randomNumber = mt_rand(1000, 9999);
        // dd($randomNumber);
        $appoinment = Appoinment::create([
            'patient_id' => $request->patient_id,
            'doctor' => $request->doctor,
            'admin_id' => $request->admin_id,
            'shift' => $request->shift,
            'admin_type' => $request->admin_type,
            'doctor_fees' => $request->doctor_fees,
            'appoinment_date' => $request->appoinment_date,
            'appoinment_no' => 'APPN'.$randomNumber,
            'slot' => $request->slot,
            'appoinment_priority' => $request->appoinment_priority,
            'payment_mode' => $request->payment_mode,
            'status' => $request->status,
            'message' => $request->message,
            'address' => $request->address,
            'live_consultant' => $request->live_consultant,
            'department' => $request->department,
        ]);

        return response()->json(['message' => 'File uploaded successfully',  $appoinment]);
    }

    public function status(Request $request, $id)
    {
        $appoinments = DB::table('appoinments')->where('id', $id)->update([
            'status' => $request->status,
        ]);
        // $appoinment->status = $request->status;
        // $appoinment->save();

        return response()->json(['message' => 'File uploaded successfully',  $appoinments]);
    }

    public function appoinmentFetch()
    {
        return Patient::join('appoinments', 'patients.id', '=', 'appoinments.patient_id')
             ->select('appoinments.id', 'appoinments.appoinment_no', 'appoinments.appoinment_date', 'appoinments.live_consultant', 'appoinments.doctor_fees', 'appoinments.status', 'appoinments.doctor', 'appoinments.patient_id', 'appoinments.Doctor', 'appoinments.appoinment_priority', 'patients.name', 'patients.guardian_name', 'patients.gender', 'patients.phone')->get();
        // dd($user);
    }

    public function doctorStore(Request $request)
    {
        return Doctor::create($request->all());
    }

    public function doctorfetch(Request $request)
    {
        return Doctor::all();
    }

    public function department(Request $request)
    {
        return Department::create($request->all());
    }

    public function departmentFetch(Request $request)
    {
        return Department::all();
    }

    public function getFeesByName($name)
    {
        $doctor = Doctor::where('name', $name)->first();

        if (!$doctor) {
            return response()->json(['error' => 'Doctor not found'], 404);
        }

        return response()->json(['fees' => $doctor->fees]);
    }
}
