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
        Schema::create('medicine_bills', function (Blueprint $table) {
            $table->id();
            $table->string('admin_type')->nullable();
            $table->foreignId('admin_id')->nullable();
            $table->foreignId('supplier_id')->nullable();
            $table->string('category_id')->nullable();
            $table->string('medicine_id')->nullable();
            $table->string('Batch_No')->nullable();
            $table->string('Expiry_Date')->nullable();
            $table->string('Quantity')->nullable();
            $table->string('paking_quantity')->nullable();
            $table->string('Sale_Price')->nullable();
            $table->string('bill_no')->nullable();
            $table->string('Tax')->nullable();
            $table->string('mrp')->nullable();
            $table->string('Amount')->nullable();
            $table->string('paid_amount')->nullable();
            $table->string('purchase_amount')->nullable();
            $table->string('balance_amount')->nullable();
            $table->string('Doctor');
            $table->string('Total')->nullable();
            $table->string('Discount')->nullable();
            $table->string('Payment_mode')->nullable();
            $table->string('Payment_Amount')->nullable();
            $table->string('files_attach')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medicine_bills');
    }
};
