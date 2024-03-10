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
        Schema::create('medicines', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('admin_type')->nullable();
            $table->foreignId('admin_id')->nullable();
            $table->foreignId('category_id')->nullable();
            $table->string('company')->nullable();
            $table->string('composition')->nullable();
            $table->string('group')->nullable();
            $table->string('unit')->nullable();
            $table->string('min_livel')->nullable();
            $table->string('re_order_livel')->nullable();
            $table->string('tax')->nullable();
            $table->string('units')->nullable();
            $table->string('vat')->nullable();
            $table->string('sale_price')->nullable();
            $table->string('note')->nullable();
            $table->string('photo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medicines');
    }
};
