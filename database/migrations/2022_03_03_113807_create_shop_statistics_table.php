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
        Schema::create('shop_statistics', function (Blueprint $table) {
            $table->integer('product_count', false, true)->default(0);
            $table->integer('all_product_count', false, true)->default(0);
            $table->float('avg_rating', 8, 2, true)->default(0);
            $table->float('nonfulfilment_rate', 8, 2, true)->default(0);

            $table->foreignId('shop_id')
                ->primary()
                ->constrained('shops')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shop_statistics');
    }
};
