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
        Schema::create('applied_shipping_channels', function (Blueprint $table) {
            $table->float('fee', 8, 2, true);

            $table->foreignId('product_id')
                ->constrained('products')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('shipping_channel_id')
                ->constrained('shipping_channels')
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
        Schema::dropIfExists('applied_shipping_channels');
    }
};
