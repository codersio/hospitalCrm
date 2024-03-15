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
        Schema::create('incomefinances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('admin_type')->nullable();
            $table->string('name')->nullable();
            $table->string('expense_id')->nullable();
            $table->string('description')->nullable();
            $table->string('amount')->nullable();
            $table->string('inv_number')->nullable();
            $table->string('date')->nullable();
            $table->string('atach_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('incomefinances');
    }
};
