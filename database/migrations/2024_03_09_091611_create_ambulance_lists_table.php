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
        Schema::create('ambulance_lists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_type')->nullable();
            $table->foreignId('admin_id')->nullable();
            $table->string('vehicle_no')->nullable();
            $table->string('vehicle_model')->nullable();
            $table->string('year')->nullable();
            $table->string('d_name')->nullable();
            $table->string('d_license')->nullable();
            $table->string('d_contact')->nullable();
            $table->string('vehicle_type')->nullable();
            $table->string('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ambulance_lists');
    }
};
