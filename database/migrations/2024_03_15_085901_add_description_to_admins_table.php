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
        Schema::table('admins', function (Blueprint $table) {
            $table->string('staff_id')->nullable();
            // $table->string('role')->nullable();
            // $table->string('role')->nullable();
            $table->foreignId('designation_id')->nullable();
            $table->foreignId('department_id')->nullable();
            $table->foreignId('specialist_id')->nullable();
            $table->string('fathername')->nullable();
            $table->string('mothername')->nullable();
            $table->string('gender')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('blood')->nullable();
            $table->string('dob')->nullable();
            $table->string('joining_date')->nullable();
            $table->string('phone')->nullable();
            $table->string('emer_contact')->nullable();
            // $table->string('email')->nullable();
            $table->string('photo')->nullable();
            $table->string('current_address')->nullable();
            $table->string('permanent_addrerss')->nullable();
            $table->string('qualification')->nullable();
            $table->string('work_experience')->nullable();
            $table->string('specialization')->nullable();
            $table->string('note')->nullable();
            $table->string('pan_number')->nullable();
            $table->string('ni_number')->nullable();
            $table->string('local_id_number')->nullable();
            $table->string('ref_contact')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('admins', function (Blueprint $table) {
        });
    }
};
