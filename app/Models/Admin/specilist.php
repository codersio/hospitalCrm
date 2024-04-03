<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class specilist extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
        'admin_type',
        'spe_name',
    ];
}
