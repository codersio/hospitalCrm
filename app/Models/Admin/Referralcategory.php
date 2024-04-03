<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referralcategory extends Model
{
    use HasFactory;
    protected $fillable = [
       'referral_cate_name',
        'admin_id',
        'admin_type',
    ];
}
