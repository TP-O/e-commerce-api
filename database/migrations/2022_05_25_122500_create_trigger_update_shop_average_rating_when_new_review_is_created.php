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
            CREATE OR REPLACE FUNCTION update_shop_average_rating_when_new_review_is_created()
            RETURNS TRIGGER AS
            $$
            DECLARE
                calculated_shop_avg_rating float;
                calculated_product_avg_rating float;
            BEGIN
                IF TG_OP = 'DELETE' OR TG_OP = 'INSERT' OR TG_OP = 'UPDATE' AND NEW.rating <> OLD.rating THEN
                    SELECT AVG(rating) INTO calculated_shop_avg_rating FROM product_reviews
                    WHERE shop_id = NEW.shop_id;
                    SELECT AVG(rating) INTO calculated_product_avg_rating FROM product_reviews
                    WHERE product_id = NEW.product_id;

                    UPDATE shop_statistics
                        SET avg_rating = calculated_shop_avg_rating
                    WHERE shop_id = NEW.shop_id;
                    UPDATE products
                        SET avg_rating = calculated_product_avg_rating
                    WHERE id = NEW.product_id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER update_shop_average_rating_when_new_review_is_created
            AFTER INSERT OR UPDATE OR DELETE ON product_reviews
            FOR EACH ROW
            EXECUTE PROCEDURE update_shop_average_rating_when_new_review_is_created();
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
            DROP TRIGGER IF EXISTS update_shop_average_rating_when_new_review_is_created ON product_reviews;
            DROP FUNCTION IF EXISTS update_shop_average_rating_when_new_review_is_created;
        ');
    }
};
