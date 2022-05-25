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
        Schema::create('product_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->integer('number_of_items')->default(0);
            $table->integer('number_of_children')->default(0);
            $table->string('cover_image', 255)->nullable();

            $table->foreignId('parent_id')
                ->nullable()
                ->constrained('product_categories')
                ->onUpdate('set null')
                ->nullOnDelete();

            $table->unique(['parent_id', 'name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_categories');
    }
};
