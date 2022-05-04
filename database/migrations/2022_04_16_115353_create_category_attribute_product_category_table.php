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
        Schema::create('product_category_product_category_attribute', function (Blueprint $table) {
            $table->boolean('is_required')->default(false);

            $table->foreignId('category_id')
                ->constrained('product_categories')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('attribute_id')
                ->constrained('product_category_attributes')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->primary(['category_id', 'attribute_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_category_product_category_attribute');
    }
};
