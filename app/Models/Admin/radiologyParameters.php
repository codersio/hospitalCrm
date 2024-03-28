<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class radiologyParameters extends Model
{
    use HasFactory;
    protected $fillable = [
       'admin_id',
'units_id',
'admin_type',
'parameter_name',
'range',
'description',
    ];
}
