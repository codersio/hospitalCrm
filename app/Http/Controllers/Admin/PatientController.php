<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
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
}
