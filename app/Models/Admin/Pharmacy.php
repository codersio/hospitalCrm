<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pharmacy extends Model
{
    use HasFactory;

    protected $fillable = [
'admin_type',
'admin_id',
'patient_id',
'Medicine_Category',
'Medicine_Name',
'Batch_No',
'Expiry_Date',
'Quantity',
'Sale_Price',
'Tax',
'Amount',
'paid_amount',
'balance_amount',
'Doctor',
'Total',
'Discount',
'Payment_mode',
'Payment_Amount',
'bill_No',
    ];
}
