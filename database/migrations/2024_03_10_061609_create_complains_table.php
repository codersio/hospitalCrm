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
        Schema::create('complains', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->nullable();
            $table->string('admin_type')->nullable();
            $table->string('cml_name')->nullable();
            $table->string('cml_no')->nullable();
            $table->string('cml_type')->nullable();
            $table->string('cml_source')->nullable();
            $table->string('cml_by')->nullable();
            $table->string('cml_phone')->nullable();
            $table->string('cml_date')->nullable();
            $table->string('cml_description')->nullable();
            $table->string('cml_token')->nullable();
            $table->string('cml_assigned')->nullable();
            $table->string('cml_note');
            $table->string('cml_atach_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complains');
    }
};
