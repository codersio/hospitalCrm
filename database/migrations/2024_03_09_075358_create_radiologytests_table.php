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
        Schema::create('radiologytests', function (Blueprint $table) {
            $table->id();
            $table->string('admin_type')->nullable();
            $table->foreignId('admin_id')->nullable();
            $table->foreignId('test_category_id')->nullable();
            $table->foreignId('charge_category_id')->nullable();
            $table->string('name')->nullable();
            $table->string('short_name')->nullable();
            $table->string('test_type')->nullable();
            $table->string('method')->nullable();
            $table->string('report_days')->nullable();
            $table->string('subcategory_name')->nullable();
            $table->string('tax')->nullable();
            $table->string('charge')->nullable();
            $table->string('amount')->nullable();
            $table->string('charge_name')->nullable();
            $table->string('test_parameter_name')->nullable();
            $table->string('range')->nullable();
            $table->string('unit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('radiologytests');
    }
};
