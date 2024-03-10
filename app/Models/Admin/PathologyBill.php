<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PathologyBill extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'patient_id',
        'pathology_category_id',
        'admin_type',

        'report_days',
        'report_date',
        'tax',
        'amount',
        'doctor',
        'note',
        'previous_value',
        'discount',
        'net_amount',
        'payment_mode',
        'date',
        'bill_no',
        'case_id',
    ];
}
