<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReferralPerson extends Model
{
    use HasFactory;

    protected $fillable = [
     'admin_id',
    'admin_type',
    'reffer_name',
    'reffer_contact',
    'reffer_person_name',
    'reffer_person_phone',
    'reffer_category',
    'reffer_stander_commission',
    'reffer_address',
    'reffer_address',
    'opd',
    'ipd',
    'pharmacy',
    'pathology',
    'radiology',
    'blood_bank',
    'ambulance',
    ];
}
