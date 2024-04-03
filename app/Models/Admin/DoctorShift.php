<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoctorShift extends Model
{
    use HasFactory;
    protected $fillable = [
  'doctor_id',

    'admin_type',
    'admin_type',
    'global_shift',
    ];
}
