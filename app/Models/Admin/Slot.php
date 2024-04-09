<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slot extends Model
{
    use HasFactory;

    protected $fillable = [
        'doctor_id',
'shift_id',
'cl_duration',
'charge_id',
'charge_type_id',
'amount',
    ];
}
