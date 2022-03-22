<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared("
            CREATE OR REPLACE FUNCTION insert_shop_statistic()
            RETURNS TRIGGER AS
            $$
            BEGIN
                INSERT INTO shop_statistics (shop_id) VALUES (NEW.id);

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER insert_shop_statistic
            AFTER INSERT ON shops
            FOR EACH ROW
            EXECUTE PROCEDURE insert_shop_statistic();
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('
            DROP TRIGGER IF EXISTS insert_shop_statistic ON shops;
            DROP FUNCTION IF EXISTS insert_shop_statistic;
        ');
    }
};
