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
        Schema::create('order_progresses', function (Blueprint $table) {
            $table->id();
            $table->text('note')->default('');
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('order_id')
                ->constrained('orders')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('status_id')
                ->nullable()
                ->default(OrderStatus::Processing->value)
                ->constrained('order_status')
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
        Schema::dropIfExists('order_progresses');
    }
};
