<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recivedf extends Model
{
    use HasFactory;
    protected $fillable = [
       'admin_id',
       'admin_type',
       'recv_name',
       'recv_ref_no',
       'recv_address',
       'recv_note',
       'recv_form_title',
       'recv_date',
       'recv_atach_file',
    ];
}
