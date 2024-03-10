<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicineBill extends Model
{
    use HasFactory;

    protected $fillable = [
     'admin_type',
'admin_id',
'supplier_id',
'category_id',
'medicine_id',
'Batch_No',
'Expiry_Date',
'Quantity',
'Sale_Price',
'Tax',
 'bill_No',
'Amount',
'paid_amount',
'balance_amount',
'Total',
 'Discount',
'Payment_mode',
'Payment_Amount',
'paking_quantity',
'mrp',
'purchase_amount',
'files_attach',
];
}
