<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
'admin_type',
'supp_name',
'supp_contact',
'contact_person_name',
'contact_person_phone',
'drug_licence',
'address',
    ];
}
