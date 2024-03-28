<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BedGroup extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
'floor_id',
'admin_type',
'group_name',
'description',
    ];
}
