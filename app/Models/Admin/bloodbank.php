<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bloodbank extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
'admin_type',
'type_id',
'name',
    ];
}
