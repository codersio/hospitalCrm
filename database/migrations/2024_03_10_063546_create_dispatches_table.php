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
        Schema::create('dispatches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('admin_type')->nullable();
            $table->string('dis_name')->nullable();
            $table->string('dis_ref_no')->nullable();
            $table->string('dis_address')->nullable();
            $table->string('dis_note')->nullable();
            $table->string('dis_form_title')->nullable();
            $table->string('dis_date')->nullable();
            $table->string('dis_atach_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dispatches');
    }
};
