<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class HumanResourceController extends Controller
{
    public function humanResource()
    {
        return Inertia::render('Admin/humanResource');
    }

    public function AdminStore(Request $request)
    {
        try {
            // Begin a transaction
            DB::beginTransaction();
            $newPassword = Str::random(10); // Adjust the password length as needed
            if ($request->hasFile('photo')) {
                $file = $request->file('photo');
                $fileName = $file->getClientOriginalName();
                $files_fld = $file->move(public_path('uploads'), $fileName);
            } else {
                $files_fld = 'document.png';
            }
            $admin = Admin::create(
                [
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request),
        'staff_id' => $request->staff_id,
        'designation_id' => $request->designation_id,
        'department_id' => $request->department_id,
        'specialist_id' => $request->specialist_id,
        'fathername' => $request->fathername,
        'mothername' => $request->mothername,
        'gender' => $request->gender,
        'marital_status' => $request->marital_status,
        'blood' => $request->blood,
        'dob' => $request->dob,
        'joining_date' => $request->joining_date,
        'phone' => $request->phone,
        'emer_contact' => $request->emer_contact,
        'photo' => $files_fld,
        'current_address' => $request->current_address,
        'permanent_addrerss' => $request->permanent_addrerss,
        'qualification' => $request->qualification,
        'work_experience' => $request->work_experience,
        'specialization' => $request->specialization,
        'note' => $request->note,
        'pan_number' => $request->pan_number,
        'ni_number' => $request->ni_number,
        'local_id_number' => $request->local_id_number,
        'ref_contact' => $request->ref_contact,
                ]
            );
            // dd($admin);
            if ($admin) {
                // Send email with the new password
                Mail::raw("Your new password: $newPassword", function ($message) use ($admin) {
                    $message->to($admin->email)->subject('Welcome to Your Application');
                });

                return 'Admin created successfully. Check your email for the new password.';
            } else {
                return 'Failed to create admin.';
            }
            // Create a payroll record associated with the Admin
            $payroll = $admin->payrolls()->create([
                'admin_id' => $admin->id,
                'epr_roll' => $request->epr_roll,
                'salary' => $request->salary,
                'contract_type' => $request->contract_type,
                'work_shift' => $request->work_shift,
                'work_location' => $request->work_location,
            ]);

            // Create a leave record associated with the Admin
            $leave = $admin->leaves()->create([
                'admin_id' => $admin->id,
                'casual_leave' => $request->casual_leave,
                'privilege_leave' => $request->privilege_leave,
                'sick_leave' => $request->sick_leave,
                'maternity_leave' => $request->maternity_leave,
                'paternity_leave' => $request->paternity_leave,
                'fever_leave' => $request->fever_leave,
            ]);

            // Create a bank account record associated with the Admin
            $bankAccount = $admin->bankaccounts()->create([
                'admin_id' => $admin->id,
                'account_title' => $request->account_title,
                'bankacct_no' => $request->bankacct_no,
                'bank_name' => $request->ifsc_code,
                'ifsc_code' => $request->ifsc_code,
                'branch_name' => $request->branch_name,
                'bank_holder' => $request->bank_holder,
            ]);

            // Commit the transaction
            DB::commit();

            // Return a success response
            return response()->json(['message' => 'Admin and associated records created successfully']);
        } catch (\Exception $e) {
            dd($e);
            // If an error occurs, rollback the transaction
            DB::rollBack();

            // Return an error response
            return response()->json(['error' => 'Failed to create Admin and associated records'], 500);
        }
    }

    public function humanresourceFetch()
    {
        return Admin::all();

        // Return the data as a JSON response
        // return response()->json(['data fetch', $admins]);
    }

    //     public function AdminStore(Request $request)
    // {
    //     $admins = Admin::create($request->all());
    //     $payrols = $admins->payrolls()->create([
    //                'admin_id' => $admins->id,
    //                 'epr_roll' => $request->epr_roll,
    //                 'salary' => $request->salary,
    //                 'contract_type' => $request->contract_type,
    //                 'work_shift' => $request->work_shift,
    //                 'work_location' => $request->work_location,
    //     ]);

    //     $leave = $admins->leaves()->create([
    //         'admin_id' => $admins->id,
    //          'casual_leave' => $request->casual_leave,
    //     'privilege_leave' => $request->privilege_leave,
    //     'sick_leave' => $request->sick_leave,
    //     'maternity_leave' => $request->maternity_leave,
    //     'paternity_leave' => $request->paternity_leave,
    //     'fever_leave' => $request->fever_leave,
    //     // 'admin_id',
    //     ]);
    //     $bank = $admins->bankaccounts()->create([
    //       'admin_id' => $admins->id,
    //         'account_title' => $request->account_title,
    //     'bankacct_no' => $request->bankacct_no,
    //     'bank_name' => $request->ifsc_code,
    //     'ifsc_code' => $request->ifsc_code,
    //     'branch_name' => $request->branch_name,
    //     // 'admin_id',
    //     ]);

    // }

    public function search(Request $request)
    {
        // return 'see';
        $searchTerm = $request->input('name');
        $admins = Admin::where('name', 'like', "%$searchTerm%")->get();
        // dd($admins);

        return response()->json($admins);
    }
}
