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
        Schema::create('pharmacies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_type');
            $table->string('admin_id');
            $table->string('Medicine_Category');
            $table->string('Medicine_Name');
            $table->string('Batch_No');
            $table->string('Expiry_Date');
            $table->string('Quantity');
            $table->string('Sale_Price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pharmacies');
    }
};
