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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 120)->unique();
            $table->string('name', 120);
            $table->text('description');
            $table->float('price', 8, 2, true)->nullable();
            $table->integer('quantity')->nullable();
            $table->text('cover_image');
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('shop_id')
                ->nullable()
                ->constrained('shops')
                ->onDelete('set null')
                ->onUpdate('set null');
            $table->foreignId('category_id')
                ->nullable()
                ->constrained('product_categories')
                ->onDelete('set null')
                ->onUpdate('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
