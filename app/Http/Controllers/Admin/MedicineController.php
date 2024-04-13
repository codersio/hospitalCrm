<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\HospitalchargeUnit;
use App\Models\Admin\Medicine;
use App\Models\Admin\MedicineBill;
use App\Models\Admin\MedicineCategory;
use App\Models\Admin\MedicineDose;
use App\Models\Admin\MedicineDoseDuration;
use App\Models\Admin\MedicineDoseInterVal;
use App\Models\Admin\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

// use Illuminate\Http\Request;

class MedicineController extends Controller
{
    public function medicine()
    {
        return Inertia::render('Admin/medicine', [
         'medicines' => Medicine::all(),
         'medicineCategories' => MedicineCategory::all(),
         'admin' => Auth::guard('admin-api')->user(),
         'medicine' => Medicine::all(),
        ]);
    }

    public function medicineFetch()
    {
        return Medicine::all();
    }

    public function medicineStore(Request $request)
    {
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName = $file->getClientOriginalName();
            $medicine = Medicine::create([
            'name' => $request->name,

            'admin_type' => $request->admin_type,
            'admin_id' => $request->admin_id,
            'category_id' => $request->category_id,
            'company' => $request->company,
            'composition' => $request->composition,
            'group' => $request->group,
            'photo' => $file->move(public_path('uploads'), $fileName),
            'units' => $request->units,
            'min_livel' => $request->min_livel,
            're_order_livel' => $request->re_order_livel,
            'tax' => $request->tax,
            'allergies' => $request->allergies,
            'vat' => $request->vat,
            'sale_price' => $request->sale_price,
            'note' => $request->note,
            'unit' => $request->unit,
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $medicine]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineCategorystore(Request $request)
    {
        $medicine_category = MedicineCategory::create($request->all());
        if ($medicine_category) {
            return response()->json(['message' => 'File uploaded successfully',  $medicine_category]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function ItemStocklist()
    {
        return Inertia::render('Admin/ImportCsv', [
           'admin' => Auth::guard('admin-api')->user(),
        ]);
    }

    public function CsvCategoryupload(Request $request)
    {
        $file = $request->file('csv_file');

        $csvData = array_map('str_getcsv', file($file));

        foreach ($csvData as $data) {
            Medicine::create([
                'admin_type' => $request->admin_type,
            'admin_id' => $request->admin_id,
            'category_id' => $request->category_id,
                'name' => $data[0],

            'company' => $data[1],
            'composition' => $data[2],
            'group' => $data[3],
            'units' => $data[4],
            'min_livel' => $data[5],
            're_order_livel' => $data[6],
            'tax' => $data[7],
            'vat' => $data[8],
            'sale_price' => $data[9],
            'note' => $data[10],
            'unit' => $data[11],
                // Add more columns as needed
            ]);
        }

        return response()->json(['message' => 'CSV data imported successfully']);
    }

    public function MedicineBill(Request $request)
    {
        // $randomNumber = mt_rand(1000, 9999);
        $latestInvoice = MedicineBill::latest()->first();

        // Extract the ID and increment it by 1
        $id = $latestInvoice ? $latestInvoice->id + 1 : 1;

        // Generate a formatted invoice number (e.g., INV0001)
        // $invoiceNumber = 'INV' . str_pad($id, 4, '0', STR_PAD_LEFT);
        // dd($randomNumber);
        if ($request->hasFile('files_attach')) {
            $file = $request->file('files_attach');
            $fileName = $file->getClientOriginalName();

            $medicinebill = MedicineBill::create([
                 'admin_type' => $request->admin_type,
                'admin_id' => $request->admin_id,
                'supplier_id' => $request->supplier_id,
                'category_id' => $request->category_id,
                'medicine_id' => $request->medicine_id,
                'Batch_No' => $request->Batch_No,
                'Expiry_Date' => $request->Expiry_Date,
                'Quantity' => $request->Quantity,
                'Sale_Price' => $request->Sale_Price,
                'Tax' => $request->Tax,
                'bill_No' => 'PCHNO'.str_pad($id, 2, '0', STR_PAD_LEFT),

                'Amount' => $request->Amount,
                'paid_amount' => $request->paid_amount,
                'balance_amount' => $request->balance_amount,

                'Total' => $request->Total,
                'Discount' => $request->Discount,
                'Payment_mode' => $request->Payment_mode,
                'Payment_Amount' => $request->Payment_Amount,
                'paking_quantity' => $request->paking_quantity,
                'mrp' => $request->mrp,
                'purchase_amount' => $request->purchase_amount,
                'files_attach' => $file->move(public_path('uploads'), $fileName),
            ]);

            return response()->json(['message' => 'File uploaded successfully',  $medicinebill]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function MedicineBillList()
    {
        return Inertia::render('Admin/MedicineBillList', [
            'admin' => Auth::guard('admin-api')->user(),
            'medicines' => Medicine::all(),
         'medicineCategories' => MedicineCategory::all(),
         'medicinebill' => MedicineBill::all(),
         'suppliers' => Supplier::all(),
        ]);
    }

    public function MedicinecategoryIndex()
    {
        return Inertia::render('Admin/medicinesetup/medicinecategory', [
            'admin' => Auth::guard('admin-api')->user(),
           'medicineCategories' => MedicineCategory::all(),
        ]);
    }

    public function MedicineCategory(Request $request)
    {
        $medicine_category = MedicineCategory::create($request->all());
        if ($medicine_category) {
            return response()->json(['message' => 'File uploaded successfully',  $medicine_category]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function MedicineCategoryUpdate(Request $request, $id)
    {
        $medicine_category = MedicineCategory::find($id);
        $medicine_category->update($request->all());
        if ($medicine_category) {
            return response()->json(['message' => 'File uploaded successfully',  $medicine_category]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function MedicineCategoryDelete(Request $request, $id)
    {
        $medicine_category = MedicineCategory::find($id);
        $medicine_category->delete();
        if ($medicine_category) {
            return response()->json(['message' => 'File uploaded successfully',  $medicine_category]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicinecategoryFetch()
    {
        return MedicineCategory::all();
    }

    public function SuppliIndex()
    {
        return Inertia::render('Admin/medicinesetup/supplier', [
            'admin' => Auth::guard('admin-api')->user(),
           'suppliers' => Supplier::all(),
        ]);
    }

    public function medicinesupplierStore(Request $request)
    {
        $supplier = Supplier::create($request->all());
        if ($supplier) {
            return response()->json(['message' => 'File uploaded successfully',  $supplier]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicinesupplierUpdate(Request $request, $id)
    {
        $supplier = Supplier::find($id);
        $supplier->update($request->all());
        if ($supplier) {
            return response()->json(['message' => 'File uploaded successfully',  $supplier]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicinesupplierDelete(Request $request, $id)
    {
        $supplier = Supplier::find($id);
        $supplier->delete();
        if ($supplier) {
            return response()->json(['message' => 'File uploaded successfully',  $supplier]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicinesupplierFetch()
    {
        return Supplier::all();
    }

    public function medicineDos()
    {
        return Inertia::render('Admin/medicinesetup/medicineDos', [
            'admin' => Auth::guard('admin-api')->user(),
           'category' => MedicineCategory::all(),
           'units' => HospitalchargeUnit::all(),
        ]);
    }

    public function medicineDoseStore(Request $request)
    {
        $medicineDose = MedicineDose::create($request->all());
        if ($medicineDose) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineDose]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineDoseUpdate(Request $request, $id)
    {
        $medicineDose = MedicineDose::find($id);
        $medicineDose->update($request->all());
        if ($medicineDose) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineDose]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineDoseDelete(Request $request, $id)
    {
        $medicineDose = MedicineDose::find($id);
        $medicineDose->delete();
        if ($medicineDose) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineDose]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineDoseFetch()
    {
        return MedicineDose::all();
    }

    // medicine interval

    public function MedicineInteervalIndex()
    {
        return Inertia::render('Admin/medicinesetup/medicineinterval', [
            'admin' => Auth::guard('admin-api')->user(),
        //    'medicineIntervals' => Medicine::all(),
        ]);
    }

    public function medicineIntervalStore(Request $request)
    {
        $medicineInterval = MedicineDoseInterVal::create($request->all());
        if ($medicineInterval) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineInterval]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineIntervalUpdate(Request $request, $id)
    {
        $medicineInterval = MedicineDoseInterVal::find($id);
        $medicineInterval->update($request->all());
        if ($medicineInterval) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineInterval]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineIntervalDelete(Request $request, $id)
    {
        $medicineInterval = MedicineDoseInterVal::find($id);
        $medicineInterval->delete();
        if ($medicineInterval) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineInterval]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineIntervalFetch()
    {
        return MedicineDoseInterVal::all();
    }

    // medicine duration

    public function MedicineDurationIndex()
    {
        return Inertia::render('Admin/medicinesetup/medicineduration', [
            'admin' => Auth::guard('admin-api')->user(),
        //    'medicineIntervals' => Medicine::all(),
        ]);
    }

    public function medicineDurationStore(Request $request)
    {
        $medicineDuration = MedicineDoseDuration::create($request->all());
        if ($medicineDuration) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineDuration]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineDurationUpdate(Request $request, $id)
    {
        $medicineDuration = MedicineDoseDuration::find($id);
        $medicineDuration->update($request->all());
        if ($medicineDuration) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineDuration]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineDurationDelete(Request $request, $id)
    {
        $medicineDuration = MedicineDoseDuration::find($id);
        $medicineDuration->delete();
        if ($medicineDuration) {
            return response()->json(['message' => 'File uploaded successfully',  $medicineDuration]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function medicineDurationFetch()
    {
        return MedicineDoseDuration::all();
    }

    public function medicinecategoryId($id)
    {
        return Medicine::where('category_id', $id)->get();
    }

    public function medicineBillidfetch()
    {
        return MedicineBill::join('suppliers', 'suppliers.id', '=', 'medicine_bills.supplier_id')
        ->select('suppliers.supp_name', 'medicine_bills.bill_no',
            'medicine_bills.Expiry_Date', 'medicine_bills.paid_amount', 'medicine_bills.Tax', 'medicine_bills.Discount', 'medicine_bills.Payment_Amount')->get();
    }
}
