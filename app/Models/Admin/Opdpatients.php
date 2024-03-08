<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opdpatients extends Model
{
    use HasFactory;

    protected $fillable = [
    'admin_id',
'admin_type',
'Height',
'Weight',
'BP', 'patient_id', 'Live_Consultation',
'Pulse',
'Temperature',
'Respiration',
'Symptoms_Type',
'Symptoms_Title',
'Symptoms_Description',
'Note',
' Allergies',
'Previous_Medical_Issue',
'appoint_Date',
'Case',
'Casualty',
'Old_Patient',
'TPA',
'Reference',
'Doctor',
'Charge_Category',
'Charge',
'Tax',
'Standard_Charge',
'Applied_Charge',
'Amount',
'Payment_Mode',
'Paid_Amount'];

    public function patients()
    {
        return $this->hasMany(Patient::class);
    }
}
