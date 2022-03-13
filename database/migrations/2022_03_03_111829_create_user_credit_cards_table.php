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
        Schema::create('user_credit_cards', function (Blueprint $table) {
            $table->id();
            $table->string('owner', 255);
            $table->string('card_number', 16)->unique();
            $table->string('expiry_date', 5); # Format: MM/YY
            $table->string('cvv', 3);
            $table->text('registration_address');
            $table->string('postal_code', 5);
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('user_id')
                ->constrained('users')
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
        Schema::dropIfExists('user_credit_cards');
    }
};
