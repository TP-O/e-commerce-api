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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->float('transportation_fee', 8, 2, true);
            $table->float('grand_total', 8, 2, true);

            $table->foreignId('payment_id')
                ->nullable()
                ->constrained('payment_methods')
                ->onDelete('set null')
                ->onUpdate('set null');;
            $table->foreignId('address_id')
                ->nullable()
                ->constrained('user_addresses')
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
        Schema::dropIfExists('orders');
    }
};
