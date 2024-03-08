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
        Schema::create('opdpatients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->nullable();
            $table->foreignId('patient_id')->nullable();
            $table->string('admin_type')->nullable();
            $table->string('Height')->nullable();
            $table->string('Weight')->nullable();
            $table->string('BP')->nullable();
            $table->string('Pulse')->nullable();
            $table->string('Temperature')->nullable();
            $table->string('Respiration')->nullable();
            $table->string('Symptoms_Type')->nullable();
            $table->string('Symptoms_Title')->nullable();
            $table->string('Symptoms_Description')->nullable();
            $table->string('Note')->nullable();
            $table->string(' Allergies')->nullable();
            $table->string('Previous_Medical_Issue')->nullable();
            $table->string('appoint_Date')->nullable();
            $table->string('Case')->nullable();
            $table->string('Casualty')->nullable();
            $table->string('Old_Patient')->nullable();
            $table->string('TPA')->nullable();
            $table->string('Reference')->nullable();
            $table->string('Doctor')->nullable();
            $table->string('Charge_Category')->nullable();
            $table->string('Charge')->nullable();
            $table->string('Tax')->nullable();
            $table->string('Standard_Charge')->nullable();
            $table->string('Applied_Charge')->nullable();
            $table->string('Amount')->nullable();
            $table->string('Payment_Mode')->nullable();
            $table->string('Paid_Amount')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opdpatients');
    }
};
