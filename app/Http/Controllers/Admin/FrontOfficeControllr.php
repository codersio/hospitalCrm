<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Complain;
use App\Models\Admin\Dispatch;
use App\Models\Admin\Frontoffice;
use App\Models\Admin\Phonelog;
use App\Models\Admin\Recivedf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FrontOfficeControllr extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/frontoffice');
    }

    public function FrontOfficeStore(Request $request)
    {
        if ($request->hasFile('atach_file')) {
            $file = $request->file('atach_file');
            $fileName = $file->getClientOriginalName();
            $front_office = Frontoffice::create([
                'admin_id' => $request->admin_id,
                'visit_purpose_id' => $request->visit_purpose_id,
                'name' => $request->name,
                'visitTo' => $request->visitTo,
                'staff' => $request->staff,
                'phone' => $request->phone,
                'date' => $request->date,
                'intime' => $request->intime,
                'outtime' => $request->outtime,
                'note' => $request->note,
                'atach_file' => $file->move(public_path('uploads'), $fileName),
                'id_card' => $request->id_card,
                'num_person' => $request->num_person,
                'related_to' => $request->related_to,
                'admin_type' => $request->admin_type,
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $front_office]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function FrontofficeDelete(Request $request, $id)
    {
        $delete = Frontoffice::where('id', $id)->delete();
        if ($delete) {
            return response()->json(['message' => 'File uploaded successfully',  $delete]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function PhoneLogsindex(Request $request)
    {
        return Inertia::render('Admin/phoneLogs', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function PhoneLogsStore(Request $request)
    {
        $phoneLogs = Phonelog::create($request->all());
        if ($phoneLogs) {
            return response()->json(['message' => 'File uploaded successfully',  $phoneLogs]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function phoneLogsDelete(Request $request, $id)
    {
        $delete = Phonelog::where('id', $id)->delete();

        return $delete;
    }

    public function phoneLogsFetch(Request $request)
    {
        return Phonelog::all();
    }

    public function phoneLogsUpdate(Request $request, $id)
    {
        $update = Phonelog::where('id', $id)->update($request->all());

        return $update;
    }

    public function ComplainIndex()
    {
        return Inertia::render('Admin/complain', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function complainFetch(Request $request)
    {
        return Complain::all();
    }

    public function complainStore(Request $request)
    {
        // $randomNumber = mt_rand(1000, 9999);
        $latestInvoice = Complain::latest()->first();
        // Extract the ID and increment it by 1
        $id = $latestInvoice ? $latestInvoice->id + 1 : 1;

        // Extract the ID and increment it by 1
        if ($request->hasFile('cml_atach_file')) {
            $file = $request->file('cml_atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = Complain::create([
                  'admin_id' => $request->admin_id,
    'admin_type' => $request->admin_type,
    'cml_name' => $request->cml_name,
    'cml_no' => 'COMPL'.str_pad($id, 2, '0', STR_PAD_LEFT),
    'cml_source' => $request->cml_source,
    'cml_by' => $request->cml_by,
    'cml_type' => $request->cml_type,
    'cml_phone' => $request->cml_phone,
    'cml_date' => $request->cml_date,
    'cml_description' => $request->cml_description,
    'cml_token' => $request->cml_token,
    'cml_assigned' => $request->cml_assigned,
    'cml_note' => $request->cml_note,
    'cml_atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function complainDelete(Request $request, $id)
    {
        return Complain::where('id', $id)->delete();
    }

    public function complainUpdate(Request $request, $id)
    {
        if ($request->hasFile('cml_atach_file')) {
            $file = $request->file('cml_atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = Complain::where('id', $id)->update([
                  'admin_id' => $request->admin_id,
    'admin_type' => $request->admin_type,
    'cml_name' => $request->cml_name,
    'cml_source' => $request->cml_source,
    'cml_by' => $request->cml_by,
    'cml_phone' => $request->cml_phone,
    'cml_date' => $request->cml_date,
    'cml_description' => $request->cml_description,
    'cml_token' => $request->cml_token,
    'cml_assigned' => $request->cml_assigned,
    'cml_note' => $request->cml_note,
    'cml_atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function Despatch()
    {
        return Inertia::render('Admin/dispatch', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function dispatchFetch()
    {
        return Dispatch::all();
    }

    public function dispatchStore(Request $request)
    {
        if ($request->hasFile('dis_atach_file')) {
            $file = $request->file('dis_atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = Dispatch::create([
                  'admin_id' => $request->admin_id,
                'admin_type' => $request->admin_type,
                'dis_name' => $request->dis_name,
                'dis_ref_no' => $request->dis_ref_no,
                'dis_address' => $request->dis_address,
                'dis_note' => $request->dis_note,
                'dis_form_title' => $request->dis_form_title,
                'dis_date' => $request->dis_date,

                'dis_atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function dispatchUpdate(Request $request, $id)
    {
        if ($request->hasFile('dis_atach_file')) {
            $file = $request->file('dis_atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = Dispatch::where('id', $id)->update([
                //   'admin_id' => $request->admin_id,
                // 'admin_type' => $request->admin_type,
                'dis_name' => $request->dis_name,
                'dis_ref_no' => $request->dis_ref_no,
                'dis_address' => $request->dis_address,
                'dis_note' => $request->dis_note,
                'dis_form_title' => $request->dis_form_title,
                'dis_date' => $request->dis_date,

                'dis_atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function dispatchDelete(Request $request, $id)
    {
        return Dispatch::where('id', $id)->delete();
    }

    public function Receive()
    {
        return Inertia::render('Admin/receive', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function reciveFetch()
    {
        return Recivedf::all();
    }

    public function reciveStore(Request $request)
    {
        if ($request->hasFile('recv_atach_file')) {
            $file = $request->file('recv_atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = Recivedf::create([
                  'admin_id' => $request->admin_id,
                'admin_type' => $request->admin_type,
                'recv_name' => $request->recv_name,
                'recv_ref_no' => $request->recv_ref_no,
                'recv_address' => $request->recv_address,
                'recv_note' => $request->recv_note,
                'recv_form_title' => $request->recv_form_title,
                'recv_date' => $request->recv_date,

                'recv_atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function reciveUpdate(Request $request, $id)
    {
        if ($request->hasFile('recv_atach_file')) {
            $file = $request->file('recv_atach_file');
            $fileName = $file->getClientOriginalName();
            $complain = Recivedf::where('id', $id)->update([
                'recv_name' => $request->recv_name,
                'recv_ref_no' => $request->recv_ref_no,
                'recv_address' => $request->recv_address,
                'recv_note' => $request->recv_note,
                'recv_form_title' => $request->recv_form_title,
                'recv_date' => $request->recv_date,

                'recv_atach_file' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $complain]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function reciveDelete(Request $request, $id)
    {
        return Recivedf::where('id', $id)->delete();
    }
}
