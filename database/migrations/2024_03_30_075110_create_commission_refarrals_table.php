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
        Schema::create('commission_refarrals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->foreignId('category_id');
            $table->string('admin_type');
            $table->decimal('obc');
            $table->decimal('ipd');
            $table->decimal('pharmacy');
            $table->decimal('pathology');
            $table->decimal('radiology');
            $table->decimal('blood_bank');
            $table->decimal('ambulance');
            $table->decimal('stander_charges');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commission_refarrals');
    }
};
