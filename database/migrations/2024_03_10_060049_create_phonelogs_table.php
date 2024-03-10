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
        Schema::create('phonelogs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->nullable();
            $table->string('admin_type')->nullable();
            $table->string('pl_name')->nullable();
            $table->string('pl_phone')->nullable();
            $table->string('pl_date')->nullable();
            $table->string('pl_description')->nullable();
            $table->string('pl_next_follor_date')->nullable();
            $table->string('pl_call_duration')->nullable();
            $table->string('pl_call_tpe');
            $table->string('pl_note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phonelogs');
    }
};
