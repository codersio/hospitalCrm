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
        Schema::create('payrols', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id');
            $table->string('epr_roll');
            $table->string('salary');
            $table->string('contract_type');
            $table->string('work_shift');
            $table->string('work_location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payrols');
    }
};
