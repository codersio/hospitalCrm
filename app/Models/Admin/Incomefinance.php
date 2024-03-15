<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Incomefinance extends Model
{
    use HasFactory;
    protected $fillable = [
        'admin_type',
        'admin_id',
        'name',
        'expense_id',
        'description',
        'amount',
        'inv_number',
        'date',
        'atach_file',
    ];
}
