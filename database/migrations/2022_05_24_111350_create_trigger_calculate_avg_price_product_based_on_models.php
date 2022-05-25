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
            CREATE OR REPLACE FUNCTION calculate_avg_price_product_based_on_models()
            RETURNS TRIGGER AS
            $$
            DECLARE
                calculated_avg_price float;
            BEGIN
                IF TG_OP = 'DELETE' OR TG_OP = 'INSERT' OR TG_OP = 'UPDATE' AND NEW.price <> OLD.price THEN
                    SELECT AVG(price) INTO calculated_avg_price FROM product_models
                    WHERE product_id = NEW.product_id;

                    UPDATE products
                        SET avg_price = calculated_avg_price
                    WHERE id = NEW.product_id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER calculate_avg_price_product_based_on_models
            AFTER INSERT OR UPDATE OR DELETE ON product_models
            FOR EACH ROW
            EXECUTE PROCEDURE calculate_avg_price_product_based_on_models();
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
            DROP TRIGGER IF EXISTS calculate_avg_price_product_based_on_models ON product_models;
            DROP FUNCTION IF EXISTS calculate_avg_price_product_based_on_models;
        ');
    }
};
