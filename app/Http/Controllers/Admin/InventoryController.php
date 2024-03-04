<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function ItemStocklist()
    {
        return Inertia::render('Admin/inventory');
    }

    public function ItemIssuet()
    {
        return Inertia::render('Admin/issueInventoryItem');
    }

    public function ItemList()
    {
        return Inertia::render('Admin/inventoryitemlist');
    }
}
