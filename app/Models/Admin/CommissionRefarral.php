<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommissionRefarral extends Model
{
    use HasFactory;
    protected $fillable = [
       'admin_id',
        'category_id',
        'admin_type',
        'opd',
        'ipd',
        'pharmacy',
        'pathology',
        'radiology',
        'blood_bank',
        'ambulance',
        'stander_charges',
    ];

    public function categories()
    {
        return $this->hasMany(Inventorycategory::class);
    }
}
