<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phonelog extends Model
{
    use HasFactory;
    protected $fillable = [
    'admin_id',
'admin_type',
'pl_name',
'pl_phone',
'pl_date',
'pl_description',
'pl_next_follor_date',
'pl_call_duration',
'pl_call_tpe',
'pl_note',
    ];
}
