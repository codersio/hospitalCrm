<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bankaccount extends Model
{
    use HasFactory;

    public function bankaccounts()
    {
        return $this->hasOne(Admin::class);
    }

    protected $fillable = [
'account_title',
'bankacct_no',
'bank_name',
'ifsc_code',
'branch_name',
'admin_id',
'bank_holder',
    ];
}
