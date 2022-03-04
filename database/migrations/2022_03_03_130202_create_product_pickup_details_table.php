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
        Schema::create('product_pickup_details', function (Blueprint $table) {
            $table->float('weight', 8, 2, true);
            $table->float('length', 8, 2, true)->nullable();
            $table->float('width', 8, 2, true)->nullable();
            $table->float('height', 8, 2, true)->nullable();
            $table->boolean('is_new')->default(true);
            $table->integer('preparation_item', false, true)->default(2);

            $table->foreignId('product_id')
                ->primary()
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
        Schema::dropIfExists('product_pickup_details');
    }
};
