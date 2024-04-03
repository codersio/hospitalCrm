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
        Schema::create('inventory_suppliers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('admin_type');
            $table->string('insup_name');
            $table->integer('insup_phone');
            $table->string('insup_email');
            $table->string('contact_persion_email');
            $table->string('contact_persion_address');
            $table->string('contact_persion_phone');
            $table->string('contact_persion_name');
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_suppliers');
    }
};
