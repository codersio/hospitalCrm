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
        Schema::create('birth_certificates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('admin_type')->nullable();

            $table->integer('chilname')->nullable();
            $table->string('date')->nullable();
            $table->string('mothername')->nullable();
            $table->string('report')->nullable();
            $table->string('gender')->nullable();
            $table->string('weight')->nullable();
            $table->string('fathername')->nullable();
            $table->string('phone')->nullable();
            $table->string('caseid')->nullable();
            $table->string('address')->nullable();

            $table->string('child_photo')->nullable();
            $table->string('father_photo')->nullable();
            $table->string('motherphoto')->nullable();
            $table->string('document')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('birth_certificates');
    }
};
