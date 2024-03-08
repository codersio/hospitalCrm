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
        Schema::create('appoinments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->nullable();
            $table->foreignId('admin_id')->nullable();
            $table->string('admin_type')->nullable();
            $table->string('shift')->nullable();
            $table->string('doctor')->nullable();
            $table->string('doctor_fees')->nullable();
            $table->string('appoinment_date')->nullable();
            $table->string('slot')->nullable();
            $table->string('appoinment_priority')->nullable();
            $table->string('payment_mode');
            $table->string('status')->nullable();
            $table->string('message')->nullable();

            $table->string('address')->nullable();
            $table->string('live_consultant')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appoinments');
    }
};
