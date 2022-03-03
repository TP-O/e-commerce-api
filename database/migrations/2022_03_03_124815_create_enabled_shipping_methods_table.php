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
        Schema::create('enabled_shipping_methods', function (Blueprint $table) {
            $table->id();
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('shop_id')
                ->constrained('shops')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('method_id')
                ->constrained('shipping_methods')
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
        Schema::dropIfExists('enabled_shipping_methods');
    }
};
