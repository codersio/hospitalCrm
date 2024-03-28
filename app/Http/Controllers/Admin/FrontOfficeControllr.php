<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\AppointmetPriority;
use App\Models\Admin\Bed;
use App\Models\Admin\BedGroup;
use App\Models\Admin\Bedtype;
use App\Models\Admin\Complain;
use App\Models\Admin\ComplainType;
use App\Models\Admin\Dispatch;
use App\Models\Admin\Floor;
use App\Models\Admin\Frontoffice;
use App\Models\Admin\FrontOfficeSource;
use App\Models\Admin\Phonelog;
use App\Models\Admin\PurposeType;
use App\Models\Admin\Recivedf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class FrontOfficeControllr extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/frontoffice', ['admin' => Auth::guard('admin-api')->user()]);
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

    public function FrontofficeList()
    {
        return Frontoffice::all();
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

    // appointment priority

    public function appointmentprioRity()
    {
        return Inertia::render('Admin/frontoffice/appointmentprioRity', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function appoinmentPriorityStore(Request $request)
    {
        $appo = AppointmetPriority::create($request->all());

        return response()->json($appo);
    }

    public function appoinmentPriorityUpdate(Request $request, $id)
    {
        $appo = AppointmetPriority::where('id', $id)->update($request->all());

        return response()->json($appo);
    }

    public function appoinmentPriorityDelete(Request $request, $id)
    {
        $appo = AppointmetPriority::where('id', $id)->delete();

        return response()->json($appo);
    }

    public function appoinmentPriorityFetch()
    {
        $appo = AppointmetPriority::all();

        return response()->json($appo);
    }

    // frontoffice

    public function frontofficeSource()
    {
        return Inertia::render('Admin/frontoffice/frontofficeSource', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function frontOfficeSourceStore(Request $request)
    {
        $source = FrontOfficeSource::create($request->all());

        return response()->json($source);
    }

    public function frontOfficeSourceUpdate(Request $request, $id)
    {
        $source = FrontOfficeSource::where('id', $id)->update($request->all());

        return response()->json($source);
    }

    public function frontOfficeSourceDelete(Request $request, $id)
    {
        $source = FrontOfficeSource::where('id', $id)->delete();

        return response()->json($source);
    }

    public function frontOfficeSourceFetch()
    {
        $source = FrontOfficeSource::all();

        return response()->json($source);
    }

    public function complaintype()
    {
        return Inertia::render('Admin/frontoffice/complainType', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function complainTypeStore(Request $request)
    {
        $complaintype = ComplainType::create($request->all());

        return response()->json($complaintype);
    }

    public function complainTypeUpdate(Request $request, $id)
    {
        $complaintype = ComplainType::where('id', $id)->update($request->all());

        return response()->json($complaintype);
    }

    public function complainTypeDelete(Request $request, $id)
    {
        $complaintype = ComplainType::where('id', $id)->delete();

        return response()->json($complaintype);
    }

    public function complainTypeFetch()
    {
        $complaintype = ComplainType::all();

        return response()->json($complaintype);
    }

    public function purposeIndex()
    {
        return Inertia::render('Admin/frontoffice/purposeType', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function purposeStore(Request $request)
    {
        $purpose = PurposeType::create($request->all());

        return $purpose;
    }

    public function purposeUpdate(Request $request, $id)
    {
        $purpose = PurposeType::where('id', $id)->update($request->all());

        return response()->json($purpose);
    }

    public function purposeDelete(Request $request, $id)
    {
        $purpose = PurposeType::where('id', $id)->delete();

        return response()->json($purpose);
    }

    public function purposeFetch()
    {
        $purpose = PurposeType::all();

        return response()->json($purpose);
    }

    public function Floor()
    {
        return Inertia::render('Admin/bedsetup/floor', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function floorStore(Request $request)
    {
        $floor = Floor::create($request->all());

        return $floor;
    }

    public function floorUpdate(Request $request, $id)
    {
        $floor = Floor::where('id', $id)->update($request->all());

        return response()->json($floor);
    }

    public function floorDelete(Request $request, $id)
    {
        $floor = Floor::where('id', $id)->delete();

        return response()->json($floor);
    }

    public function floorFetch()
    {
        $floor = Floor::all();

        return response()->json($floor);
    }

    public function bedGroup()
    {
        return Inertia::render('Admin/bedsetup/bedgroup', [
            'admin' => Auth::guard('admin-api')->user(),
            'floor' => Floor::all(),
        ]);
    }

    public function bedStore(Request $request)
    {
        $bed = BedGroup::create($request->all());

        return $bed;
    }

    public function bedUpdate(Request $request, $id)
    {
        $bed = BedGroup::where('id', $id)->update($request->all());

        return response()->json($bed);
    }

    public function bedDelete(Request $request, $id)
    {
        $bed = BedGroup::where('id', $id)->delete();

        return response()->json($bed);
    }

    public function bedFetch()
    {
        $bed = BedGroup::all();

        return response()->json($bed);
    }

    public function bedType()
    {
        return Inertia::render('Admin/bedsetup/bedtype', [
            'admin' => Auth::guard('admin-api')->user(),
            'floor' => Floor::all(),
            'bedgroup' => BedGroup::all(),
        ]);
    }

    public function bedtypeStore(Request $request)
    {
        $bedtype = Bedtype::create($request->all());

        return $bedtype;
    }

    public function bedtypeUpdate(Request $request, $id)
    {
        $bedtype = Bedtype::where('id', $id)->update($request->all());

        return response()->json($bedtype);
    }

    public function bedtypeDelete(Request $request, $id)
    {
        $bedtype = Bedtype::where('id', $id)->delete();

        return response()->json($bedtype);
    }

    public function bedtypeFetch()
    {
        $bedtype = Bedtype::all();

        return response()->json($bedtype);
    }

    public function bedlist()
    {
        return Inertia::render('Admin/bedsetup/bedall', [
            'admin' => Auth::guard('admin-api')->user(),
            'floor' => Floor::all(),
            'bedgroup' => BedGroup::all(),
            'bedtype' => Bedtype::all(),
        ]);
    }

    public function bedlistStore(Request $request)
    {
        $bedlist = Bed::create($request->all());

        return $bedlist;
    }

    public function bedlistUpdate(Request $request, $id)
    {
        $bedlist = Bed::where('id', $id)->update($request->all());

        return response()->json($bedlist);
    }

    public function bedlistDelete(Request $request, $id)
    {
        $bedlist = Bed::where('id', $id)->delete();

        return response()->json($bedlist);
    }

    public function bedlistFetch()
    {
        $bedlist = DB::table('beds')
                ->select('beds.status', 'beds.id', 'beds.bed_name', 'bed_groups.group_name', 'bedtypes.bed_type_name')
                ->join('bed_groups', 'beds.bed_group_id', '=', 'bed_groups.id')
                ->join('bedtypes', 'beds.bed_type_id', '=', 'bedtypes.id')
                ->get();

        return response()->json($bedlist);
    }
}
