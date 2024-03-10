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
        Schema::create('pathology_bills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->nullable();
            $table->foreignId('patient_id')->nullable();
            $table->foreignId('pathology_category_id')->nullable();
            $table->string('admin_type')->nullable();

            $table->string('report_days')->nullable();
            $table->string('report_date')->nullable();
            $table->string('tax')->nullable();
            $table->string('amount')->nullable();
            $table->string('doctor')->nullable();
            $table->string('note')->nullable();
            $table->string('previous_value')->nullable();
            $table->string('discount')->nullable();
            $table->string('net_amount')->nullable();
            $table->string('payment_mode')->nullable();
            $table->string('date')->nullable();
            $table->string('bill_no')->nullable();
            $table->string('case_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pathology_bills');
    }
};
