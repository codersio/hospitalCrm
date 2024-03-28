<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pathologyUnits extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
'admin_type',
'patho_unit_name',
    ];
}
