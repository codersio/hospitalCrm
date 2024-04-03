<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventorycategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
        'admin_type',
        'invencat_name',
    ];

    public function commissions()
    {
        return $this->belongsTo(CommissionRefarral::class);
    }
}
