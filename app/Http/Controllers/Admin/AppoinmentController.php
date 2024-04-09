<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Admin;
use App\Models\Admin\Appoinment;
use App\Models\Admin\Department;
use App\Models\Admin\Doctor;
use App\Models\Admin\DoctorShift;
use App\Models\Admin\GlobalShift;
use App\Models\Admin\Patient;
use App\Models\Admin\Slot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AppoinmentController extends Controller
{
    public function index()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/Appoinment', ['admin' => $admin,
        'doctor' => Admin::where('type', 'Doctor')->get(),
    ]);
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

    public function GlobalShift()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/appoinmentsetp/shiftsetup', ['admin' => $admin]);
    }

    public function appoinmentGlobalStaffStore(Request $request)
    {
        $appoinmentGlobalStaff = GlobalShift::create($request->all());

        return response()->json($appoinmentGlobalStaff);
    }

    public function appoinmentGlobalStaffUpdate(Request $request, $id)
    {
        $appoinmentGlobalStaff = GlobalShift::find($id);
        $appoinmentGlobalStaff->update($request->all());

        return response()->json($appoinmentGlobalStaff);
    }

    public function appoinmentGlobalStaffDelete(Request $request, $id)
    {
        $appoinmentGlobalStaff = GlobalShift::find($id);
        $appoinmentGlobalStaff->delete();

        return response()->json($appoinmentGlobalStaff);
    }

    public function appoinmentGlobalStaffFetch()
    {
        return GlobalShift::all();
    }

    public function DoctorShift()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/appoinmentsetp/doctorshifte', ['admin' => $admin,
    'shift' => GlobalShift::all(),
    'doctor' => Admin::where('type', 'Doctor')->get(),
    ]);
    }

    public function appoinmentDoctorShiftStore(Request $request)
    {
        // dd($request->all());
        $appoinmentDoctorStaff = DoctorShift::create($request->all());

        return response()->json($appoinmentDoctorStaff);
    }

    public function appoinmentDoctorShiftUpdate(Request $request, $id)
    {
        $appoinmentDoctorStaff = DoctorShift::find($id);
        $appoinmentDoctorStaff->update($request->all());

        return response()->json($appoinmentDoctorStaff);
    }

    public function appoinmentDoctorShiftDelete(Request $request, $id)
    {
        $appoinmentDoctorStaff = DoctorShift::find($id);
        $appoinmentDoctorStaff->delete();

        return response()->json($appoinmentDoctorStaff);
    }

    public function appoinmentDoctorShiftFetch()
    {
        return DoctorShift::join('admins', 'admins.id', '=', 'doctor_shifts.doctor_id')
    ->join('global_shifts', 'doctor_shifts.shift_id', '=', 'global_shifts.id')
    ->select('admins.name', 'global_shifts.shift_name', 'doctor_shifts.id', 'doctor_shifts.doctor_id', 'doctor_shifts.shift_id')
    // ->where('admins.type', 'Doctor')
    ->get();
    }

    public function appoinmentStols()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/appoinmentsetp/appoinmentstols', ['admin' => $admin,  'shift' => GlobalShift::all(),
    'doctor' => Admin::where('type', 'Doctor')->get(), ]);
    }

    public function appoinmentSlotsStore(Request $request)
    {
        $appoinmentSlots = Slot::create($request->all());

        return response()->json($appoinmentSlots);
    }

    public function appoinmentSlotsUpdate(Request $request, $id)
    {
        $appoinmentSlots = Slot::find($id);
        $appoinmentSlots->update($request->all());

        return response()->json($appoinmentSlots);
    }

    public function appoinmentSlotsDelete(Request $request, $id)
    {
        $appoinmentSlots = Slot::find($id);
        $appoinmentSlots->delete();

        return response()->json($appoinmentSlots);
    }

    public function appoinmentSlotsFetch()
    {
        return Slot::join('admins', 'admins.id', '=', 'slots.doctor_id')
        ->join('global_shifts', 'global_shifts.id', '=', 'slots.shift_id')
        ->join('hospitalcharge_categories', 'hospitalcharge_categories.id', '=', 'slots.chrage_id')
        ->select('admins.name', 'global_shifts.shift_name', 'hospitalcharge_categories.charge_name', 'slots.id', 'slots.doctor_id', 'slots.shift_id', 'slots.chrage_id', 'slots.amount', 'slots.ci_duration');
    }
}
