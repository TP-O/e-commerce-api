<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('product_wholesale_prices', function (Blueprint $table) {
            $table->id();
            $table->integer('min', false, true);
            $table->integer('max', false, true);
            $table->float('price', 8, 2, true);

            $table->foreignId('product_id')
                ->constrained('products')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->unique(['product_id', 'min']);
        });

        DB::statement('
            ALTER TABLE product_wholesale_prices
            ADD CONSTRAINT chk_max CHECK (max > min);
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_wholesale_prices');
    }
};
