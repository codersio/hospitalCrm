<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pathologytest extends Model
{
    use HasFactory;

    protected $fillable = [
  'admin_type',
'admin_id',
'test_category_id',
'charge_category_id',
'name',
'short_name',
'test_type',
'subcategory_name',
'tax',
'charge',
'amount',
'charge_name',
'test_parameter_name',
'range',
'unit',
'method',
'report_days',
    ];
}
