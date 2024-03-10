<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
'name',
'guardian_name',
'gender',
'date_of_birth',
'age',
'blood_group',
'marital_status',
'patient_photo',
'phone',
'email',
'address',
'remarks',
'allergies', ];

    public function opdpatients()
    {
        return $this->hasMany(Opdpatients::class);
    }

    public function ambulance()
    {
        return $this->hasOne(Ambulance::class);
    }
}
