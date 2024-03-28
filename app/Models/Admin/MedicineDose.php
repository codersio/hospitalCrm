<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicineDose extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'admin_type',
        'category_id',
        'hospital_units_id',
        'dose',
    ];
}
