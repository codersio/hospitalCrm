<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ambulance extends Model
{
    use HasFactory;
    protected $fillable = [
'admin_id',
'patient_id',
'vehicle_model_id',
'admin_type',
'driver_name',
'date',
'tax',
'amount',
'charge_name',
'note',
'ambulance_category_id',
'discount',
'net_amount',
'payment_mode',
'bill_no',
'case_id',
    ];

    public function ambulancelist()
    {
        return $this->belongsTo(AmbulanceList::class);
    }
}
