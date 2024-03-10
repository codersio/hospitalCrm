<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispatch extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'admin_type',
        'dis_name',
        'dis_ref_no',
        'dis_address',
        'dis_note',
        'dis_form_title',
        'dis_date',
        'dis_atach_file',
    ];
}
