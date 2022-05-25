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
        Schema::create('shops', function (Blueprint $table) {
            $table->string('slug', 40)->unique();
            $table->string('name', 30);
            $table->text('description')->default('');
            $table->string('avatar_image', 255)->nullable();
            $table->string('cover_image', 255)->nullable();
            $table->text('banners')->default('["images":[],"videos":[]]');
            $table->timestamp('created_at')->useCurrent();

            $table->foreignId('id')
                ->primary()
                ->constrained('users')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shops');
    }
};
