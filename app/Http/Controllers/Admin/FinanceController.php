<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Expensefinaence;
use App\Models\Admin\TpaManagment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FinanceController extends Controller
{
    public function income()
    {
        return Inertia::render('Admin/income', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function expenses()
    {
        return Inertia::render('Admin/expenses', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function tpamanagement()
    {
        return Inertia::render('Admin/tpamanagment', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function tpamanagementStore(Request $request)
    {
        $data = TpaManagment::create($request->all());
        if ($data) {
            return response()->json(['message' => 'File uploaded successfully',  $data]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function tpamanagementUpdate(Request $request, $id)
    {
        $data = TpaManagment::where('id', $id)->update($request->all());
        if ($data) {
            return response()->json(['message' => 'File uploaded successfully',  $data]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function tpamanagementDelete(Request $request, $id)
    {
        return TpaManagment::find($id)->delete();
    }

    public function tpamanagementFetch(Request $request)
    {
        return TpaManagment::all();
    }

    public function expenseStore(Request $request)
    {
        if ($request->hasFile('atach_file')) {
            $file = $request->file('atach_file');
            $fileName = $file->getClientOriginalName();
            $files_fld = $file->move(public_path('uploads'), $fileName);
        } else {
            $files_fld = 'document.png';
        }

        $expens = Expensefinaence::create([
             'admin_id' => $request->admin_id,
           'admin_type' => $request->admin_type,
           'name' => $request->name,

            'expense_id' => $request->expense_id,
            'description' => $request->description,
            'amount' => $request->amount,
            'inv_number' => $request->inv_number,

            'date' => $request->date,

           'atach_file' => $files_fld,
            ]);
        if ($expens) {
            return response()->json(['message' => 'File uploaded successfully',  $expens]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function expenseUpdate(Request $request, $id)
    {
        if ($request->hasFile('atach_file')) {
            $file = $request->file('atach_file');
            $fileName = $file->getClientOriginalName();
            $files_fld = $file->move(public_path('uploads'), $fileName);
        } else {
            $files_fld = 'document.png';
        }

        $expens = Expensefinaence::where('id', $id)->update([
        //      'admin_id' => $request->admin_id,
        //    'admin_type' => $request->admin_type,
           'name' => $request->name,

            'expense_id' => $request->expense_id,
            'description' => $request->description,
            'amount' => $request->amount,
            'inv_number' => $request->inv_number,

            'date' => $request->date,

           'atach_file' => $files_fld,
            ]);
        if ($expens) {
            return response()->json(['message' => 'File uploaded successfully',  $expens]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function expenseDelete(Request $request, $id)
    {
        return Expensefinaence::find($id)->delete();
    }

    public function expenseFetch(Request $request)
    {
        return Expensefinaence::all();
    }

    public function incomeStore(Request $request)
    {
        if ($request->hasFile('atach_file')) {
            $file = $request->file('atach_file');
            $fileName = $file->getClientOriginalName();
            $files_fld = $file->move(public_path('uploads'), $fileName);
        } else {
            $files_fld = 'document.png';
        }

        $expens = Expensefinaence::create([
             'admin_id' => $request->admin_id,
           'admin_type' => $request->admin_type,
           'name' => $request->name,

            'expense_id' => $request->expense_id,
            'description' => $request->description,
            'amount' => $request->amount,
            'inv_number' => $request->inv_number,

            'date' => $request->date,

           'atach_file' => $files_fld,
            ]);
        if ($expens) {
            return response()->json(['message' => 'File uploaded successfully',  $expens]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function incomeUpdate(Request $request, $id)
    {
        if ($request->hasFile('atach_file')) {
            $file = $request->file('atach_file');
            $fileName = $file->getClientOriginalName();
            $files_fld = $file->move(public_path('uploads'), $fileName);
        } else {
            $files_fld = 'document.png';
        }

        $expens = Expensefinaence::where('id', $id)->update([
        //      'admin_id' => $request->admin_id,
        //    'admin_type' => $request->admin_type,
           'name' => $request->name,

            'expense_id' => $request->expense_id,
            'description' => $request->description,
            'amount' => $request->amount,
            'inv_number' => $request->inv_number,

            'date' => $request->date,

           'atach_file' => $files_fld,
            ]);
        if ($expens) {
            return response()->json(['message' => 'File uploaded successfully',  $expens]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function incomeDelete(Request $request, $id)
    {
        return Expensefinaence::find($id)->delete();
    }

    public function incomeFetch(Request $request)
    {
        return Expensefinaence::all();
    }
}
