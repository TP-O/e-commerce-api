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
                shop_id int;
                calculated_avg_rating float;
            BEGIN
                IF TG_OP = 'DELETE' OR TG_OP = 'INSERT' OR TG_OP = 'UPDATE' AND NEW.rating <> OLD.rating THEN
                    SELECT AVG(rating) INTO calculated_avg_rating FROM product_reviews
                    WHERE shop_id = NEW.shop_id;

                    UPDATE shop_statistics
                        SET avg_raiting = calculated_avg_rating
                    WHERE shop_id = NEW.shop_id;
                END IF;

                IF TG_OP = 'INSERT' THEN
                    SELECT products.shop_id INTO shop_id FROM products WHERE id = NEW.product_id;

                    NEW.shop_id := shop_id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER update_shop_average_rating_when_new_review_is_created
            BEFORE INSERT OR UPDATE OR DELETE ON product_reviews
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
