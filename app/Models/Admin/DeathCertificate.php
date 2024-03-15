<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeathCertificate extends Model
{
    use HasFactory;

    protected $fillable = [
    'admin_id',
    'admin_type',
    'case_id',
    'patient_id',
    'date',
    'guardian_name',
    'report',
    'atach_file',
    ];
}
