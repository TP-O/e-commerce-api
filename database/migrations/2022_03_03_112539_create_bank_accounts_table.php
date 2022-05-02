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
        Schema::create('bank_accounts', function (Blueprint $table) {
            $table->id();
            $table->morphs('bank_accountable');
            $table->string('accountholder_name', 64);
            $table->string('identification_number', 12);
            $table->string('bank_name', 255);
            $table->string('bank_branch', 255);
            $table->string('account_number', 17);

            $table->unique([
                'bank_accountable_id',
                'bank_accountable_type',
                'account_number',
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
        Schema::dropIfExists('bank_accounts');
    }
};
