<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AmbulanceList extends Model
{
    use HasFactory;
    protected $fillable = [
     'admin_type',
'admin_id',
'vehicle_no',
'vehicle_model',
'year',
'd_name',
'd_license',
'd_contact',
'vehicle_type',
'note', ];

    public function ambulance()
    {
        return $this->hasOne(Ambulance::class);
    }
}
