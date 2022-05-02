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
        Schema::create('credit_cards', function (Blueprint $table) {
            $table->id();
            $table->morphs('credit_cardable');
            $table->string('cardholder_name', 64);
            $table->string('card_number', 16);
            $table->string('expiry_date', 5); # Format: MM/YY
            $table->string('cvv', 3);
            $table->text('registration_address');
            $table->string('postal_code', 5);

            $table->unique([
                'credit_cardable_id',
                'credit_cardable_type',
                'card_number',
            ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credit_cards');
    }
};
