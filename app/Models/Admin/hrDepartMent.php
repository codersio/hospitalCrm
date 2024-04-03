<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hrDepartMent extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
        'admin_type',
        'department_name',
    ];
}
