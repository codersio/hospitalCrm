<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RadiologyUnits extends Model
{
    use HasFactory;
    protected $fillable = [
      'admin_id',
'admin_type',
'radio_unit_name',
    ];
}
