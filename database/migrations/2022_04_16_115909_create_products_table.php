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
            $table->string('name', 255);
            $table->text('description')->default('');
            $table->float('weight', 8, 2, true);
            $table->float('avg_rating', false, true)->default(0);
            $table->float('avg_price', false, true)->default(0);
            $table->integer('sold', false, true)->default(0);
            $table->text('images')->default('[]');
            $table->text('videos')->default('[]');
            $table->text('variations')->default('[]');
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('shop_id')
                ->nullable()
                ->constrained('shops')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('brand_id')
                ->nullable()
                ->constrained('product_brands')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('status_id')
                ->nullable()
                ->constrained('product_status')
                ->onUpdate('set null')
                ->nullOnDelete();
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
