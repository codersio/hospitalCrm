<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalchargeCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
'type_id',
'admin_type',
'name',
'description',
    ];
}
