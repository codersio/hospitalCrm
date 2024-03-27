<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leaves extends Model
{
    use HasFactory;

    public function admins()
    {
        return $this->hasOne(Admin::class);
    }

    protected $fillable = [
        'casual_leave',
        'privilege_leave',
        'sick_leave',
        'maternity_leave',
        'paternity_leave',
        'fever_leave',
        'admin_id',
    ];
}
