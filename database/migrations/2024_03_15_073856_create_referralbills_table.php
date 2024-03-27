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
        Schema::create('referralbills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('admin_type')->nullable();
            $table->foreignId('patient_id')->nullable();
            $table->string('patient_type')->nullable();
            $table->string('bill_no')->nullable();
            $table->string('patient_bill_amount')->nullable();
            $table->string('reffer_id')->nullable();
            $table->string('commision_percenttage')->nullable();
            $table->string('commision_amount')->nullable();
            $table->string('atach_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('referralbills');
    }
};
