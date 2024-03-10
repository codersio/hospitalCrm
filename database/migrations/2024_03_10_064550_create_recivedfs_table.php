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
        Schema::create('recivedfs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('admin_type')->nullable();
            $table->string('recv_name')->nullable();
            $table->string('recv_ref_no')->nullable();
            $table->string('recv_address')->nullable();
            $table->string('recv_note')->nullable();
            $table->string('recv_form_title')->nullable();
            $table->string('recv_date')->nullable();
            $table->string('recv_atach_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recivedfs');
    }
};
