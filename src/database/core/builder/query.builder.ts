import { Column } from 'database/core/builder/interfaces/column.interface';
import { ConstraintBuilder } from 'database/core/builder/constraint.builder';
import { JoinTypes } from 'database/core/builder/types/join.type';
import { OrderTypes } from 'database/core/builder/types/order.type';
import { TableBuilder } from 'database/core/builder/table.builder';
import {
  PrimaryKey,
  ForeignKey,
  Index,
  Unique,
} from 'database/core/builder/interfaces/constraint.interface';

export class QueryBuilder {
  private querySentence = '';

  /**
   * Get built query sentence.
   */
  getQuery() {
    return this.querySentence;
  }

  /**
   * Reset query sentence.
   */
  resetQuery() {
    this.querySentence = '';
  }

  /**
   * Crate table.
   */
  createTable(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: PrimaryKey,
    foreignKeys?: ForeignKey[],
    uniqueColumns?: Unique,
  ) {
    this.querySentence = new TableBuilder().build(
      table,
      columns,
      primaryKey,
      foreignKeys,
      uniqueColumns,
    );
  }

  /**
   * Create non-existent table.
   */
  createTableIfNotExists(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: PrimaryKey,
    foreignKeys?: ForeignKey[],
    uniqueColumns?: Unique,
  ) {
    this.createTable(table, columns, primaryKey, foreignKeys, uniqueColumns);

    this.querySentence = this.querySentence.replace(
      'CREATE TABLE',
      'CREATE TABLE IF NOT EXISTS',
    );
  }

  /**
   * Create index of table.
   */
  createIndex(index: Index) {
    this.querySentence = new ConstraintBuilder().index(index);
  }

  /**
   * Drop table.
   */
  dropTable(table: string) {
    this.querySentence = `DROP TABLE \`${table}\`;`;
  }

  /**
   * Drop existent table.
   */
  dropTableIfExists(table: string) {
    this.dropTable(table);

    this.querySentence = this.querySentence.replace('DROP TABLE', 'DROP TABLE IF EXISTS');
  }

  /**
   * Insert data.
   */
  insert(table: string, columns: string[], values: string[][]) {
    this.querySentence = `INSERT INTO ${table} (${columns
      .map((c) => `\`${c}\``)
      .join(', ')}) VALUES ("${values
      .map((value) => value.join('","'))
      .join('"), ("')}");`;
  }

  /**
   * Update data.
   */
  update(table: string, data: { [key: string]: any }) {
    const c: string[] = [];

    for (const [key, value] of Object.entries(data)) {
      c.push(`\`${key}\` = '${value}'`);
    }

    this.querySentence = `UPDATE \`${table}\` SET ${c.join(', ')} ${this.querySentence}`;
  }

  /**
   * Delete data.
   */
  delele(table: string) {
    this.querySentence = `DELETE FROM \`${table}\` ${this.querySentence}`;
  }

  /**
   * Select columns
   *
   * @param columns selected columns.
   */
  select(...columns: string[]) {
    if (columns.includes('*')) {
      this.querySentence += 'SELECT *';
    } else {
      this.querySentence += `SELECT ${columns
        .map((c) => `\`${c.split('.').join('`.`').split(':').join('` AS `')}\``)
        .join(', ')}`;
    }

    return this;
  }

  /**
   *
   *
   * @param columns
   */
  addSelection(...columns: string[]) {
    const q = this.querySentence.split(' FROM ');

    q[0] += `, ${columns
      .map((c) => `\`${c.split('.').join('`.`').split(':').join('` AS `')}\``)
      .join(', ')}`;

    this.querySentence = q.join(' FROM ');

    return this;
  }

  /**
   * Select from tables.
   *
   * @param tables selected tables.
   */
  from(...tables: string[]) {
    this.querySentence += ` FROM (${tables
      .map((c) => `\`${c.split(':').join('` AS `')}\``)
      .join(', ')})`;

    return this;
  }

  /**
   * Join table
   *
   * @param table joined table.
   * @param type type of join.
   */
  join(table: string, type: string = JoinTypes.inner()) {
    this.querySentence += ` ${type} (\`${table}\`)`;

    return this;
  }

  /**
   * Start Where clause.
   *
   * @param conditions list of conditions.
   */
  /* eslint-disable-next-line */
  where(conditions: string[][] | ((q: QueryBuilder) => void)) {
    if (typeof conditions === 'function') {
      conditions(this);
    } else {
      return this.whereClause(conditions, 'WHERE');
    }

    return this;
  }

  /**
   * Start conditions for joins.
   *
   * @param conditions list of conditions.
   */
  /* eslint-disable-next-line */
  on(conditions: string[][] | ((q: QueryBuilder) => void)) {
    if (typeof conditions === 'function') {
      conditions(this);
    } else {
      return this.whereClause(conditions, 'ON');
    }

    return this;
  }

  /**
   * Use OR operator.
   *
   * @param conditions list of conditions.
   */
  orWhere(conditions: string[][]) {
    return this.whereClause(conditions, 'OR');
  }

  /**
   * Use AND operator.
   *
   * @param conditions list of conditions.
   */
  andWhere(conditions: string[][]) {
    return this.whereClause(conditions, 'AND');
  }

  /**
   * Use NOT operator.
   *
   * @param conditions list of conditions.
   */
  notWhere(conditions: string[][]) {
    return this.whereClause(conditions, 'NOT');
  }

  /**
   * Build conditions
   *
   * @param conditions list of conditions.
   * @param prefix word preceded list of conditions.
   */
  private whereClause(conditions: string[][], prefix: string) {
    this.querySentence += ` ${prefix} (${conditions
      .map((c) => {
        c[0] = `\`${c[0].split('.').join('`.`')}\``;

        const c2 = c[2].split(':');

        if (c2[0] === 'v') {
          c[2] = `'${c2[1]}'`;
        } else {
          c[2] = `\`${c[2].split('.').join('`.`')}\``;
        }

        return c.join(' ');
      })
      .join(' AND ')})`;

    return this;
  }

  /**
   * Group the same results.
   *
   * @param column specified column.
   */
  groupBy(column: string) {
    this.querySentence += ` GROUP BY (${column})`;

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  orderBy(column: string, type: string = OrderTypes.ascending()) {
    this.querySentence += ` ORDER BY (${column}) ${type}`;

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  limit(number: number) {
    this.querySentence += ` LIMIT ${number}`;

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  min(column: string, alias?: string) {
    return this.func(column, 'MIN', alias);
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  max(column: string, alias?: string) {
    return this.func(column, 'MAX', alias);
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  sum(column: string, alias?: string) {
    return this.func(column, 'SUM', alias);
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  avg(column: string, alias?: string) {
    return this.func(column, 'AVG', alias);
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  count(column: string, alias?: string) {
    return this.func(column, 'COUNT', alias);
  }

  /**
   * Use some simple SQL functions.
   *
   * @param column specified column.
   * @param name name of SQL function.
   */
  private func(column: string, name: string, alias = 'data') {
    this.querySentence = this.querySentence.replace(
      `\`${column.split('.').join('`.`')}\``,
      `${name}(\`${column.split('.').join('`.`')}\`) AS \`${alias}\``,
    );

    return this;
  }
}
