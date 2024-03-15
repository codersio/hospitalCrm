<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TpaManagment extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'admin_type',
        'name',
        'code',
        'contact',
        'address',
        'contact_person_name',
        'contact_person_number',
    ];
}
