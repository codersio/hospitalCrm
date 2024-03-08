<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appoinment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'admin_type',
        'admin_id',
        'shift', 'doctor_fees', 'doctor', 'appoinment_no',
        'appoinment_date',
        'slot',
        'appoinment_priority',
        'payment_mode',
        'status',
        'message',
        'address',
        'live_consultant',
        'department',
     ];
}
