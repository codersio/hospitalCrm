<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complain extends Model
{
    use HasFactory;
    protected $fillable = [
      'admin_id',
    'admin_type',
    'cml_name',
    'cml_source',
    'cml_by',
    'cml_phone',
    'cml_date',
    'cml_description',
    'cml_token',
    'cml_assigned',
    'cml_note',
    'cml_atach_file',
    'cml_no',
    'cml_type',
    ];
}
