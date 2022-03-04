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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->string('name', 120);
            $table->integer('quantity', false, true);
            $table->float('price', 8, 2, true);
            $table->text('reminder');
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->onDelete('set null')
                ->onUpdate('set null');
            $table->foreignId('order_id')
                ->constrained('orders')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('product_id')
                ->nullable()
                ->constrained('products')
                ->onDelete('set null')
                ->onUpdate('set null');
            $table->foreignId('product_class_id')
                ->nullable()
                ->constrained('product_classifications')
                ->onDelete('set null')
                ->onUpdate('set null');
            $table->foreignId('status_id')
                ->nullable()
                ->constrained('order_status')
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
        Schema::dropIfExists('order_items');
    }
};
