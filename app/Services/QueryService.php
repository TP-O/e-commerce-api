<?php

namespace App\Services;

use Error;
use Illuminate\Support\Facades\DB;

class QueryService
{
    /**
     * Update multiple records of the table.
     *
     * @param string $table
     * @param array $values
     * @param string $primaryKey
     * @return int
     */
    public function updateMultipleRecords($table, $values, $primaryKey = 'id', callable $callback = null)
    {
        if (count($values) === 0) {
            return 0;
        }

        $tempTable = 'temp_tb';
        $columns = join(',', array_keys($values[0]));
        $changes = join(',', array_map(function ($column) use ($tempTable) {
            return "$column = $tempTable.$column";
        }, array_keys($values[0])));
        $newValues = join(',', array_map(function ($value) use ($callback) {
            if (!is_null($callback)) {
                $value = $callback($value);
            }

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
            WHERE $table.$primaryKey = $tempTable.$primaryKey;",
        );
    }
}
