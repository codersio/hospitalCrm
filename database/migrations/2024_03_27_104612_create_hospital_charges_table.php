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
        Schema::create('hospital_charges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->nullable();
            $table->string('admin_type')->nullable();
            $table->foreignId('charge_type_id');
            $table->foreignId('charge_category_id');
            $table->foreignId('unit_id');
            $table->string('charge_name');
            $table->foreignId('charge_tax_id');
            $table->decimal('tax')->nullable();
            $table->decimal('stander_charge')->nullable();
            $table->string('description')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hospital_charges');
    }
};
