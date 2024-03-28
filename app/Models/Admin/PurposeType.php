<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurposeType extends Model
{
    use HasFactory;
    protected $fillable = [
    'admin_id',
'admin_type',
'purpose_name',
'description',
    ];
}
