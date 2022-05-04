<?php

use App\Enums\ProductStatus;
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
        $published = ProductStatus::Published->value;
        $delisted = ProductStatus::Delisted->value;
        $deleted = ProductStatus::Deleted->value;

        DB::unprepared("
            CREATE OR REPLACE FUNCTION update_product_count_of_shop_statistic()
            RETURNS TRIGGER AS
            $$
            BEGIN
                IF TG_OP = 'INSERT' THEN
                    IF NEW.status_id = $published THEN
                        UPDATE shop_statistics
                        SET
                            product_count = product_count + 1,
                            all_product_count = all_product_count + 1
                        WHERE shop_id = NEW.shop_id;

                    ELSIF NEW.status_id = $delisted THEN
                        UPDATE shop_statistics
                        SET all_product_count = all_product_count + 1
                        WHERE shop_id = NEW.shop_id;
                    END IF;

                ELSIF TG_OP = 'UPDATE' THEN
                    IF NEW.status_id = $published THEN
                        IF OLD.status_id = $delisted THEN
                            UPDATE shop_statistics
                            SET product_count = product_count + 1
                            WHERE shop_id = NEW.shop_id;

                        ELSIF OLD.status_id = $deleted THEN
                            UPDATE shop_statistics
                            SET
                                product_count = product_count + 1,
                                all_product_count = all_product_count + 1
                            WHERE shop_id = NEW.shop_id;
                        END IF;

                    ELSIF NEW.status_id = $delisted THEN
                        IF OLD.status_id = $published THEN
                            UPDATE shop_statistics
                            SET product_count = product_count - 1
                            WHERE shop_id = NEW.shop_id;

                        ELSIF OLD.status_id = $deleted THEN
                            UPDATE shop_statistics
                            SET all_product_count = all_product_count + 1
                            WHERE shop_id = NEW.shop_id;
                        END IF;

                    ELSIF NEW.status_id = $deleted THEN
                        IF OLD.status_id = $published THEN
                            UPDATE shop_statistics
                            SET
                                product_count = product_count - 1,
                                all_product_count = all_product_count - 1
                            WHERE shop_id = NEW.shop_id;

                        ELSIF OLD.status_id = $delisted THEN
                            UPDATE shop_statistics
                            SET all_product_count = all_product_count - 1
                            WHERE shop_id = NEW.shop_id;
                        END IF;
                    END IF;

                ELSIF TG_OP = 'DELETE' THEN
                    IF OLD.status_id = $published THEN
                        UPDATE shop_statistics
                        SET
                            product_count = product_count - 1,
                            all_product_count = all_product_count - 1
                        WHERE shop_id = NEW.shop_id;

                    ELSIF OLD.status_id = $delisted THEN
                        UPDATE shop_statistics
                        SET all_product_count = all_product_count - 1
                        WHERE shop_id = NEW.shop_id;
                    END IF;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER update_product_count_of_shop_statistic
            AFTER INSERT OR UPDATE OR DELETE ON products
            FOR EACH ROW
            EXECUTE PROCEDURE update_product_count_of_shop_statistic();
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
            DROP TRIGGER IF EXISTS update_product_count_of_shop_statistic ON products;
            DROP FUNCTION IF EXISTS update_product_count_of_shop_statistic;
        ');
    }
};
