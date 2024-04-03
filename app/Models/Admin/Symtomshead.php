<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symtomshead extends Model
{
    use HasFactory;
    protected $fillable = [
     'admin_id',
    'admin_type',
    'symptom_head',
    'type_id',
    'description',
    ];
}
