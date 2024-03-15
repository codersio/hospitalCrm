<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\BirthCertificate;
use App\Models\Admin\DeathCertificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DeathandBirthController extends Controller
{
    public function deathRecord()
    {
        return Inertia::render('Admin/deathRecord', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function birthRecord()
    {
        return Inertia::render('Admin/birthRecord', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function deathcertificateStore(Request $request)
    {
        if ($request->hasFile('atach_file')) {
            $file = $request->file('atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = DeathCertificate::create([
                  'admin_id' => $request->admin_id,
                'admin_type' => $request->admin_type,
                'case_id' => $request->case_id,
                'patient_id' => $request->patient_id,
                'date' => $request->date,
                'guardian_name' => $request->guardian_name,
                'report' => $request->report,
                // 'dis_date' => $request->dis_date,

                'atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function deathcertificateFetch()
    {
        return DeathCertificate::all();
    }

    public function deathcertificateUpdate(Request $request, $id)
    {
        if ($request->hasFile('atach_file')) {
            $file = $request->file('atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = DeathCertificate::where('id', $id)->update([
                  'admin_id' => $request->admin_id,
                'admin_type' => $request->admin_type,
                'case_id' => $request->case_id,
                'patient_id' => $request->patient_id,
                'date' => $request->date,
                'guardian_name' => $request->guardian_name,
                'report' => $request->report,
                // 'dis_date' => $request->dis_date,

                'atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function deathcertificateDelete($id)
    {
        return DeathCertificate::where('id', $id)->delete();
    }

    public function birthcertificateStore(Request $request)
    {
        if ($request->hasFile('child_photo')) {
            $childimage = $request->file('child_photo');
            $imageNamec = time().'.'.$childimage->getClientOriginalExtension();
            $childimage->move(public_path('uploads'), $imageNamec);
        } else {
            $imageNamec = 'default.png';
        }

        if ($request->hasFile('father_photo')) {
            $fatherimage = $request->file('father_photo');
            $imageNamef = time().'.'.$fatherimage->getClientOriginalExtension();
            $fatherimage->move(public_path('uploads'), $imageNamef);
        } else {
            $imageNamef = 'default.png';
        }

        if ($request->hasFile('motherphoto')) {
            $motherimage = $request->file('motherphoto'); // Assuming the field name is 'mother_photo'
            $imageNamem = time().'.'.$motherimage->getClientOriginalExtension();
            $motherimage->move(public_path('uploads'), $imageNamem);
        } else {
            $imageNamem = 'default.png';
        }

        if ($request->hasFile('document')) {
            $doc = $request->file('document');
            $imageNamed = time().'.'.$doc->getClientOriginalExtension();
            $doc->move(public_path('document'), $imageNamed);
        } else {
            $imageNamed = 'default.png';
        }

        $birth = BirthCertificate::create([
            'admin_id' => $request->admin_id,
            'admin_type' => $request->admin_type,
            'chilname' => $request->chilname,
            'date' => $request->date,
            'child_photo' => $imageNamec,
            'father_photo' => $imageNamef,
            'motherphoto' => $imageNamem,
            'report' => $request->report,
            'mothername' => $request->mothername,
            'gender' => $request->gender,
            'weight' => $request->weight,
            'fathername' => $request->fathername,
            'phone' => $request->phone,
            'caseid' => $request->caseid,
            'address' => $request->address,
            'document' => $imageNamed,
        ]);

        if ($birth) {
            return response()->json(['message' => 'File uploaded successfully', 'data' => $birth]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function birthcertificateUpdate(Request $request, $id)
    {
        if ($request->hasFile('child_photo')) {
            $childimage = $request->file('child_photo');
            $imageNamec = time().'.'.$childimage->getClientOriginalExtension();
            $childimage->move(public_path('uploads'), $imageNamec);
        } else {
            $imageNamec = 'default.png';
        }

        if ($request->hasFile('father_photo')) {
            $fatherimage = $request->file('father_photo');
            $imageNamef = time().'.'.$fatherimage->getClientOriginalExtension();
            $fatherimage->move(public_path('uploads'), $imageNamef);
        } else {
            $imageNamef = 'default.png';
        }

        if ($request->hasFile('motherphoto')) {
            $motherimage = $request->file('motherphoto'); // Assuming the field name is 'mother_photo'
            $imageNamem = time().'.'.$motherimage->getClientOriginalExtension();
            $motherimage->move(public_path('uploads'), $imageNamem);
        } else {
            $imageNamem = 'default.png';
        }

        if ($request->hasFile('document')) {
            $doc = $request->file('document');
            $imageNamed = time().'.'.$doc->getClientOriginalExtension();
            $doc->move(public_path('document'), $imageNamed);
        } else {
            $imageNamed = 'default.png';
        }

        $birth = BirthCertificate::where('id', $id)->update([
            // 'admin_id' => $request->admin_id,
            // 'admin_type' => $request->admin_type,
            'chilname' => $request->chilname,
            'date' => $request->date,
            'child_photo' => $imageNamec,
            'father_photo' => $imageNamef,
            'motherphoto' => $imageNamem,
            'report' => $request->report,
            'mothername' => $request->mothername,
            'gender' => $request->gender,
            'weight' => $request->weight,
            'fathername' => $request->fathername,
            'phone' => $request->phone,
            'caseid' => $request->caseid,
            'address' => $request->address,
            'document' => $imageNamed,
        ]);

        if ($birth) {
            return response()->json(['message' => 'File uploaded successfully', 'data' => $birth]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function birthcertificateDelete($id)
    {
        return BirthCertificate::where('id', $id)->delete();
    }

    public function birthcertificateFetch()
    {
        return BirthCertificate::all();
    }
}
