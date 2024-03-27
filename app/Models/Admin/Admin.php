<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\Admin as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Admin extends Authenticatable implements JWTSubject
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'staff_id',
        'designation_id',
        'department_id',
        'specialist_id',
        'fathername',
        'mothername',
        'gender',
        'marital_status',
        'blood',
        'dob',
        'joining_date',
        'phone',
        'emer_contact',
        'photo',
        'current_address',
        'permanent_addrerss',
        'qualification',
        'work_experience',
        'specialization',
        'note',
        'pan_number',
        'ni_number',
        'local_id_number',
        'ref_contact',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function payrolls()
    {
        return $this->belongsTo(Payrolls::class);
    }

    public function leaves()
    {
        return $this->belongsTo(Leaves::class);
    }

    public function bankaccounts()
    {
        return $this->belongsTo(Bankaccount::class);
    }
}
