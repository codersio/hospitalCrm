<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BirthCertificate extends Model
{
    use HasFactory;

    protected $fillable = [
'admin_id',
'admin_type',
'chilname',
'date',
'mothername',
'report',
'gender',
'weight',
'fathername',
'phone',
'caseid',
'address',
'child_photo',
'father_photo',
'motherphoto',
'document',
    ];
}
