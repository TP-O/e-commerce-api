<?php

namespace App\Services;

use Error;
use Illuminate\Support\Facades\DB;

class QueryService
{
    public function updateMultipleRecords(string $table, array $values)
    {
        if (count($values) === 0) {
            throw new Error('The $values must have at least one element.');
        }

        $tempTable = 'temp_tb';
        $columns = join(',', array_keys($values[0]));
        $changes = join(',', array_map(function ($column) use ($tempTable) {
            return "$column = $tempTable.$column";
        }, array_keys($values[0])));
        $newValues = join(',', array_map(function ($value) {
            $newValue = array_map(function ($val) {
                return is_string($val)
                    ? '\'' . str_replace('\'', '\'\'', $val) . '\''
                    : $val;
            }, $value);

            return '(' . join(',', $newValue) . ')';
        }, $values));

        return DB::update(
            "
            UPDATE $table
            SET $changes
            FROM (values $newValues) as $tempTable ($columns)
            WHERE $table.id = $tempTable.id;",
        );
    }
}
