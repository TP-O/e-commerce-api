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
        Schema::create('product_classifications', function (Blueprint $table) {
            $table->id();
            $table->float('price', 8, 2, true);
            $table->integer('quantity');
            $table->string('sku', 64);

            $table->foreignId('group_id')
                ->constrained('product_classification_groups')
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
        Schema::dropIfExists('product_classifications');
    }
};
