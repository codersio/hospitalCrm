<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Frontoffice extends Model
{
    use HasFactory;

    protected $fillable = [
     'admin_id',
    'visit_purpose_id',
    'name',
    'visitTo',
    'staff',
    'phone',
    'date',
    'intime',
    'outtime',
    'note',
    'atach_file',
    'id_card',
    'num_person',
    'related_to',
    'admin_type',
    ];
}
