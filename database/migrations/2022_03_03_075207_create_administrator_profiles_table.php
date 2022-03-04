<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('administrator_profiles', function (Blueprint $table) {
            $table->string('display_name', 50)->nullable();
            $table->text('avatar_image');
            $table->string('phone', 12)->nullable();
            $table->tinyInteger('gender', false, true)->default(1);
            $table->date('date_of_birth')->nullable();

            $table->foreignId('admin_id')
                ->primary()
                ->constrained('administrators')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('administrator_profiles');
    }
};
