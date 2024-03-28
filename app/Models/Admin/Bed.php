<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'admin_type',
        'bed_name',
        'bed_type_id',
        'bed_group_id',
        'status',
    ];
}
