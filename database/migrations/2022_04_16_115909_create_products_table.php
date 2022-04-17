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
            $table->float('weight', 8, 2, true);
            $table->text('images')->default('[""]');
            $table->text('videos')->default('[""]');
            $table->text('variations')->default('[""]');
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('shop_id')
                ->nullable()
                ->constrained('shops')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->foreignId('brand_id')
                ->nullable()
                ->constrained('product_brands')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->foreignId('status_id')
                ->nullable()
                ->constrained('product_status')
                ->cascadeOnUpdate()
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
