<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Admin;
use App\Models\Admin\Medicine;
use App\Models\Admin\MedicineBill;
use App\Models\Admin\MedicineCategory;
use App\Models\Admin\Patient;
use App\Models\Admin\Pharmacy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PharmacyController extends Controller
{
    public function index()
    {
        $admin = Auth::guard('admin-api')->user();

        return Inertia::render('Admin/pharmacy', ['admin' => $admin, 'medicines' => Medicine::all(),
         'medicineCategories' => MedicineCategory::all(), 'doctor' => Admin::where('type', 'Doctor')->get(),
        ]);
    }

    public function pharmacyStore(Request $request)
    {
        // $randomNumber = mt_rand(1000, 9999);
        $latestInvoice = MedicineBill::latest()->first();

        // Extract the ID and increment it by 1
        $id = $latestInvoice ? $latestInvoice->id + 1 : 1;
        // $randomNumber = mt_rand(1000, 9999);
        $pharmacy = Pharmacy::create([
             'admin_type' => $request->admin_type,
            'admin_id' => $request->admin_id,
            'patient_id' => $request->patient_id,
            'Medicine_Category' => $request->Medicine_Category,
            'Medicine_Name' => $request->Medicine_Name,
            'Batch_No' => $request->Batch_No,
            'Expiry_Date' => $request->Expiry_Date,
            'Quantity' => $request->Quantity,
            'Sale_Price' => $request->Sale_Price,
            'Tax' => $request->Tax,
            'bill_No' => 'PHARMAB'.str_pad($id, 2, '0', STR_PAD_LEFT),

            'Amount' => $request->Amount,
            'paid_amount' => $request->paid_amount,
            'balance_amount' => $request->balance_amount,
            'Doctor' => $request->Doctor,
            'Total' => $request->Total,
            'Discount' => $request->Discount,
            'Payment_mode' => $request->Payment_mode,
            'Payment_Amount' => $request->Payment_Amount,
        ]);

        if ($pharmacy) {
            return response()->json(['message' => 'File uploaded successfully',  $pharmacy]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function pharmacybillList()
    {
        return Patient::join('pharmacies', 'patients.id', '=', 'pharmacies.patient_id')
        ->join('admins', 'admins.id', '=', 'pharmacies.admin_id')
        // ->where('type', 'Doctor')
        ->select('admins.name as doctor_name', 'pharmacies.id', 'pharmacies.Discount', 'pharmacies.Bill_No', 'pharmacies.Payment_Amount', 'pharmacies.Amount',
            'pharmacies.paid_amount', 'pharmacies.balance_amount', 'patients.name', 'pharmacies.Sale_Price', 'patients.gender', 'patients.phone')->get();
    }

    public function MedicineBillidcaten($id)
    {
        return MedicineBill::where('medicine_id', $id)->get();
    }

    public function BatchNo($id)
    {
        return MedicineBill::find($id);
    }
}
