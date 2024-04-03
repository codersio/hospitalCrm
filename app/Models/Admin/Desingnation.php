<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Desingnation extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
        'admin_type',
        'degnation_name',
    ];
}
