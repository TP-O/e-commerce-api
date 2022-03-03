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
        Schema::create('product_classification_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name', 14);

            $table->foreignId('parent_id')
                ->nullable()
                ->constrained('product_classification_groups')
                ->onDelete('set null')
                ->onUpdate('set null');
            $table
                ->foreignId('product_id')
                ->constrained('products')
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
        Schema::dropIfExists('product_classification_groups');
    }
};
