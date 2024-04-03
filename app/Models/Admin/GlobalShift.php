<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GlobalShift extends Model
{
    use HasFactory;
    protected $fillable = [
'admin_id',
'admin_type',
'shift_name',
'shift_time_to',
'shift_time_from',
    ];
}
