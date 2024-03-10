<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    use HasFactory;

    protected $fillable = [
  'name',
'admin_type',
'admin_id',
'category_id',
'company',
'composition',
'group',
'unit',
'min_livel',
're_order_livel',
'tax',
'units',
'vat',
'sale_price',
'note',
'photo', ];
}
