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
        Schema::create('addressables', function (Blueprint $table) {
            $table->morphs('addressable');

            $table->foreignId('address_id')
                ->constrained('addresses')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('type_id')
                ->nullable()
                ->constrained('address_types')
                ->onUpdate('set null')
                ->nullOnDelete();

            $table->unique([
                'addressable_id',
                'addressable_type',
                'address_id',
                'type_id',
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
        Schema::dropIfExists('addressables');
    }
};
