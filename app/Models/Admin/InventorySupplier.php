<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InventorySupplier extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_id',
        'admin_type',
       'insup_name', 'insup_phone',
'insup_email',
'contact_persion_email',
'contact_persion_address',
'contact_persion_name',
'contact_persion_phone',
'description',
 ];
}
