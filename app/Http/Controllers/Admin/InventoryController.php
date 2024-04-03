<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Inventory;
use App\Models\Admin\Inventorycategory;
use App\Models\Admin\InventoryIssue;
use App\Models\Admin\InventoryStockitem;
use App\Models\Admin\InventoryStore;
use App\Models\Admin\InventorySupplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function ItemStocklist()
    {
        return Inertia::render('Admin/inventory', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function ItemIssuet()
    {
        return Inertia::render('Admin/issueInventoryItem', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function ItemList()
    {
        return Inertia::render('Admin/inventoryitemlist', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function inventoryStore(Request $request)
    {
        // $fileName = '';
        if ($request->hasFile('atach_file')) {
            $doc = $request->file('atach_file');
            $fileName = time().'.'.$doc->getClientOriginalExtension();
            $doc->move(public_path('uploads'), $fileName);
        } else {
            $fileName = 'default.png';
        }
        $inventory = new Inventory();
        $inventory->admin_id = $request->admin_id;
        $inventory->admin_type = $request->admin_type;
        $inventory->inventory_category_id = $request->inventory_category_id;
        $inventory->inventory_category_name = $request->inventory_category_name;
        $inventory->supplier_id = $request->supplier_id;
        $inventory->store_id = $request->store_id;
        $inventory->qty = $request->qty;
        $inventory->atach_file = $fileName;
        $inventory->date = $request->date;
        $inventory->description = $request->description;
        $inventory->purchase_price = $request->purchase_price;

        $inventory->save();
        // dd($inventory);

        if ($inventory) {
            return response()->json(['message' => ' records created successfully']);
        }
    }

    public function inventoryUpdate(Request $request, $id)
    {
        if ($request->hasFile('atach_file')) {
            $doc = $request->file('atach_file');
            $fileName = time().'.'.$doc->getClientOriginalExtension();
            $doc->move(public_path('uploads'), $fileName);
        } else {
            $fileName = 'default.png';
        }
        $inventory = Inventory::findOrFail($id);
        $inventory->admin_id = $request->admin_id;
        $inventory->admin_type = $request->admin_type;
        $inventory->inventory_category_id = $request->inventory_category_id;
        $inventory->inventory_category_name = $request->inventory_category_name;
        $inventory->supplier_id = $request->supplier_id;
        $inventory->store_id = $request->store_id;
        $inventory->qty = $request->qty;
        $inventory->atach_file = $fileName;
        $inventory->date = $request->date;
        $inventory->description = $request->description;
        $inventory->purchase_price = $request->purchase_price;
        $inventory->save();
        // dd($inventory);

        if ($inventory) {
            return response()->json(['message' => 'Admin and associated records created successfully']);
        }
    }

    public function inventoryDelete(Request $request, $id)
    {
        $inventory = Inventory::where('id', $id)->delete();
        if ($inventory) {
            return response()->json(['message' => 'File uploaded successfully',  $inventory]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryFetch()
    {
        return Inventory::all();
    }

    public function inventoryIssueStore(Request $request)
    {
        $inventoryIssue = new InventoryIssue();

        // Set the properties according to your data
        $inventoryIssue->admin_id = $request->admin_id;
        $inventoryIssue->admin_type = $request->admin_type;
        $inventoryIssue->user_type_id = $request->user_type_id;
        $inventoryIssue->issue_to = $request->issue_to;
        $inventoryIssue->issue_by = $request->issue_by;
        $inventoryIssue->issue_date = $request->issue_date;
        $inventoryIssue->return_date = $request->return_date;
        $inventoryIssue->note = $request->note;
        $inventoryIssue->item_name = $request->item_name;
        $inventoryIssue->status = 0;
        $inventoryIssue->item_category_id = $request->item_category_id;
        $inventoryIssue->item_qty = $request->item_qty;

        $inventoryIssue->save();
        if ($inventoryIssue) {
            return response()->json(['message' => 'File uploaded successfully',  $inventoryIssue]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryIssueUpdate(Request $request, $id)
    {
        $inventoryIssue = InventoryIssue::findOrFail($id);

        // Set the properties according to your data
        $inventoryIssue->admin_id = $request->admin_id;
        $inventoryIssue->admin_type = $request->admin_type;
        $inventoryIssue->user_type_id = $request->user_type_id;
        $inventoryIssue->issue_to = $request->issue_to;
        $inventoryIssue->issue_by = $request->issue_by;
        $inventoryIssue->issue_date = $request->issue_date;
        $inventoryIssue->return_date = $request->return_date;
        $inventoryIssue->note = $request->note;
        $inventoryIssue->item_name = $request->item_name;
        $inventoryIssue->status = 0;
        $inventoryIssue->item_category_id = $request->item_category_id;
        $inventoryIssue->item_qty = $request->item_qty;
        $inventoryIssue->save();
        if ($inventoryIssue) {
            return response()->json(['message' => 'Admin and associated records created successfully']);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryIssueDelete(Request $request, $id)
    {
        $inventoryIssue = InventoryIssue::where('id', $id)->delete();
        if ($inventoryIssue) {
            return response()->json(['message' => 'File uploaded successfully',  $inventoryIssue]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryIssueFetch()
    {
        return InventoryIssue::all();
    }

    public function ClickToReturn(Request $request)
    {
        $inventoryIssue = InventoryIssue::findOrFail($request->id);
        $inventoryIssue->status = 1;
        $inventoryIssue->save();
        if ($inventoryIssue) {
            return response()->json(['message' => 'File uploaded successfully',  $inventoryIssue]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryStockitemStore(Request $request)
    {
        $stockItem = new InventoryStockitem();
        $stockItem->admin_id = $request->admin_id;
        $stockItem->admin_type = $request->admin_type;
        $stockItem->category_id = $request->category_id;
        $stockItem->name = $request->name;
        $stockItem->unit = $request->unit;
        $stockItem->note = $request->note;
        $stockItem->save();
        if ($stockItem) {
            return response()->json(['message' => 'File uploaded successfully',  $stockItem]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryStockitemUpdate(Request $request, $id)
    {
        $stockItem = InventoryStockitem::findOrFail($id);
        $stockItem->admin_id = $request->admin_id;
        $stockItem->admin_type = $request->admin_type;
        $stockItem->category_id = $request->category_id;
        $stockItem->name = $request->name;
        $stockItem->unit = $request->unit;
        $stockItem->note = $request->note;
        $stockItem->save();
        if ($stockItem) {
            return response()->json(['message' => 'Admin and associated records created successfully']);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryStockitemDelete(Request $request, $id)
    {
        $stockItem = InventoryStockitem::where('id', $id)->delete();
        if ($stockItem) {
            return response()->json(['message' => 'File uploaded successfully',  $stockItem]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryStockitemFetch()
    {
        return InventoryStockitem::all();
    }

    public function InventoryCategory()
    {
        return Inertia::render('Admin/inventorysetup/category', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function inventorycategoryStore(Request $request)
    {
        $inventoryCategory = new Inventorycategory();
        $inventoryCategory->admin_id = $request->admin_id;
        $inventoryCategory->admin_type = $request->admin_type;
        $inventoryCategory->invencat_name = $request->invencat_name;
        $inventoryCategory->save();
        if ($inventoryCategory) {
            return response()->json(['message' => 'File uploaded successfully',  $inventoryCategory]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventorycategoryUpdate(Request $request, $id)
    {
        $inventoryCategory = Inventorycategory::findOrFail($id);
        $inventoryCategory->admin_id = $request->admin_id;
        $inventoryCategory->admin_type = $request->admin_type;
        $inventoryCategory->invencat_name = $request->invencat_name;
        $inventoryCategory->save();
        if ($inventoryCategory) {
            return response()->json(['message' => 'Admin and associated records created successfully']);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventorycategoryDelete(Request $request, $id)
    {
        $inventoryCategory = Inventorycategory::where('id', $id)->delete();
        if ($inventoryCategory) {
            return response()->json(['message' => 'File uploaded successfully',  $inventoryCategory]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventorycategoryFetch()
    {
        return Inventorycategory::all();
    }

    public function Itemstore()
    {
        return Inertia::render('Admin/inventorysetup/store', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function inventoryStoreStore(Request $request)
    {
        $item = InventoryStore::create($request->all());
        if ($item) {
            return response()->json(['message' => 'File uploaded successfully',  $item]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryStoreUpdate(Request $request, $id)
    {
        $item = InventoryStore::findOrFail($id);
        $item->update($request->all());

        if ($item) {
            return response()->json(['message' => 'Admin and associated records created successfully']);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryStoreDelete(Request $request, $id)
    {
        $item = InventoryStore::where('id', $id)->delete();
        if ($item) {
            return response()->json(['message' => 'File uploaded successfully',  $item]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function inventoryStoreFetch()
    {
        return InventoryStore::all();
    }

    public function supplierInventory()
    {
        return Inertia::render('Admin/inventorysetup/suplier', ['admin' => Auth::guard('admin-api')->user()]);
    }

    public function InventorySupplierStore(Request $request)
    {
        $supplier = InventorySupplier::create($request->all());
        if ($supplier) {
            return response()->json(['message' => 'File uploaded successfully',  $supplier]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function InventorySupplierUpdate(Request $request, $id)
    {
        $supplier = InventorySupplier::findOrFail($id);
        $supplier->update($request->all());

        if ($supplier) {
            return response()->json(['message' => 'Admin and associated records created successfully']);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function InventorySupplierDelete(Request $request, $id)
    {
        $supplier = InventorySupplier::where('id', $id)->delete();
        if ($supplier) {
            return response()->json(['message' => 'File uploaded successfully',  $supplier]);
        } else {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
    }

    public function InventorySupplierFetch()
    {
        return InventorySupplier::all();
    }
}
