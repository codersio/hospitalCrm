<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function PatientsList()
    {
        $patients = Patient::all();

        return Inertia::render('Admin/patients/PatientsList', [
            'patients' => $patients,
        ]);
    }

    public function patientsFetch()
    {
        return Patient::all();
    }

    public function store(Request $request)
    {
        $request->validate([
         'name' => 'required|string|max:255',
         // 'field2' => 'required|email',
        ]);
        // $file = $request->file('patient_photo');
        // $fileName = $file->getClientOriginalName();
        // $file->move(public_path('uploads'), $fileName);
        // $patient = Patient::create([
        // 'name' => $request->name,

        // 'guardian_name' => $request->guardian_name,
        // 'gender' => $request->gender,
        // 'date_of_birth' => $request->date_of_birth,
        // 'age' => $request->age,
        // 'blood_group' => $request->blood_group,
        // 'marital_status' => $request->marital_status,
        // 'patient_photo' => $file,
        // 'phone' => $request->phone,
        // 'email' => $request->email,
        // 'address' => $request->address,
        // 'remarks' => $request->remarks,
        // 'allergies' => $request->allergies,
        // ]);

        // return $patient;

        if ($request->hasFile('patient_photo')) {
            $file = $request->file('patient_photo');
            $fileName = $file->getClientOriginalName();
            $patient = Patient::create([
            'name' => $request->name,

            'guardian_name' => $request->guardian_name,
            'gender' => $request->gender,
            'date_of_birth' => $request->date_of_birth,
            'age' => $request->age,
            'blood_group' => $request->blood_group,
            'marital_status' => $request->marital_status,
            'patient_photo' => $file->move(public_path('uploads'), $fileName),
            'phone' => $request->phone,
            'email' => $request->email,
            'address' => $request->address,
            'remarks' => $request->remarks,
            'allergies' => $request->allergies,
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $patient]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function Import()
    {
        return Inertia::render('Admin/patients/patientimport', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function importpatient(Request $request, $id)
    {
        $file = $request->file('csv_file');

        $csvData = array_map('str_getcsv', file($file));

        foreach ($csvData as $data) {
            Patient::create([
                'admin_type' => $request->admin_type,
            'admin_id' => $request->admin_id,

                'name' => $data[0],

            'guardian_name' => $data[1],
            'gender' => $data[2],
            'date_of_birth' => $data[3],
            'age' => $data[4],
            'blood_group' => $data[5],
            'marital_status' => $data[6],
            'phone' => $data[7],
            'email' => $data[8],
            'address' => $data[9],
            'remarks' => $data[10],
            'allergies' => $data[11],
                // Add more columns as needed
            ]);
        }

        return response()->json(['message' => 'CSV data imported successfully']);
    }
}
