<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalChargeType extends Model
{
    use HasFactory;
    // protected $table = 'hospital_charge_type';

    protected $fillable = [
     'admin_id',
'admin_type',
'type_name',
    ];
}
