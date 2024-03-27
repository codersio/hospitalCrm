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
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->nullable();
            $table->string('admin_type')->nullable();
            $table->string('inventory_category_id');
            $table->string('inventory_category_name');
            $table->foreignId('supplier_id');
            $table->foreignId('store_id');
            $table->string('qty');
            $table->string('atach_file')->nullable();
            $table->date('date')->nullable();
            $table->string('description')->nullable();
            $table->decimal('purchase_price', 10, 2);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventories');
    }
};
