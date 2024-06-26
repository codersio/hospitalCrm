<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payrol extends Model
{
    use HasFactory;

    public function admins()
    {
        return $this->hasOne(Payrolls::class);
    }
    protected $fillable = [
       'admin_id',
'epr_roll',
'salary',
'contract_type',
'work_shift',
'work_location',
     ];
}
