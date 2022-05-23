<?php

use App\Enums\OrderStatus;
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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->text('variations')->default('[]');
            $table->integer('quantity', false, true);
            $table->float('total', 8, 2, true);
            $table->float('grand_total', 8, 2, true);
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('product_id')
                ->nullable()
                ->constrained('products')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('product_model_id')
                ->nullable()
                ->constrained('product_models')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('received_address_id')
                ->nullable()
                ->constrained('addresses')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('pickup_address_id')
                ->nullable()
                ->constrained('addresses')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('status_id')
                ->nullable()
                ->default(OrderStatus::Processing->value)
                ->constrained('order_status')
                ->onUpdate('set null')
                ->nullOnDelete();
            $table->foreignId('shop_id')
                ->nullable()
                ->constrained('shops')
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
        Schema::dropIfExists('orders');
    }
};
