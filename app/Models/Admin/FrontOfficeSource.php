<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrontOfficeSource extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
'admin_type',
'source_name',
'description',
    ];
}
