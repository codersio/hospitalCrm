<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('referral_people', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('admin_type');
            $table->string('reffer_name');
            $table->string('reffer_contact');
            $table->string('reffer_person_name');
            $table->string('reffer_person_phone');
            $table->foreignId('reffer_category');
            $table->float('reffer_stander_commission');
            $table->string('reffer_address');
            $table->string('reffer_address');
            $table->float('opd');
            $table->float('ipd');
            $table->float('pharmacy');
            $table->float('pathology');
            $table->float('radiology');
            $table->float('blood_bank');
            $table->float('ambulance');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('referral_people');
    }
};
