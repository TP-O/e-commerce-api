<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        DB::unprepared("
            CREATE OR REPLACE FUNCTION update_number_of_children_of_category()
            RETURNS TRIGGER AS
            $$
            BEGIN
                IF TG_OP = 'INSERT' AND NEW.parent_id IS NOT NULL THEN
                    UPDATE product_categories
                    SET number_of_children = number_of_children + 1
                    WHERE id = NEW.parent_id;

                ELSIF TG_OP = 'UPDATE' AND OLD.parent_id <> NEW.parent_id THEN
                    IF OLD.parent_id IS NOT NULL THEN
                        UPDATE product_categories
                        SET number_of_children = number_of_children - 1
                        WHERE id = OLD.parent_id;
                    END IF;

                    IF NEW.parent_id IS NOT NULL THEN
                        UPDATE product_categories
                        SET number_of_children = number_of_children + 1
                        WHERE id = NEW.parent_id;
                    END IF;

                ELSIF TG_OP = 'DELETE' AND OLD.parent_id IS NOT NULL THEN
                    UPDATE product_categories
                    SET number_of_children = number_of_children - 1
                    WHERE id = OLD.parent_id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER update_number_of_children_of_category
            AFTER INSERT OR UPDATE OR DELETE ON product_categories
            FOR EACH ROW
            EXECUTE PROCEDURE update_number_of_children_of_category();
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
            DROP TRIGGER IF EXISTS update_number_of_children_of_category ON product_categories;
            DROP FUNCTION IF EXISTS update_number_of_children_of_category;
        ');
    }
};
