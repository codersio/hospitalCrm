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
        Schema::create('frontoffices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->foreignId('visit_purpose_id');
            $table->string('name');
            $table->string('admin_type');
            $table->string('visitTo');
            $table->string('staff');
            $table->string('phone');
            $table->string('date');
            $table->string('intime');
            $table->string('outtime');
            $table->string('note');
            $table->string('atach_file');
            $table->string('id_card');
            $table->string('num_person');
            $table->string('related_to');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frontoffices');
    }
};
