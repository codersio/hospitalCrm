<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referralbill extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'admin_type',
        'patient_id',
        'bill_no',
        'patient_bill_amount',
        'reffer_id',
        'commision_percenttage',
        'commision_amount',

        'patient_type',
    ];
}
