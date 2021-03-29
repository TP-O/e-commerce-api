import { Column } from '@database/core/builder/interfaces/column.interface';
import { ConstraintBuilder } from '@database/core/builder/constraint.builder';
import { JoinTypes } from '@database/core/builder/types/join.type';
import { OrderTypes } from '@database/core/builder/types/order.type';
import { TableBuilder } from '@database/core/builder/table.builder';
import {
  PrimaryKey,
  ForeignKey,
  Index,
  Unique,
} from '@database/core/builder/interfaces/constraint.interface';

export class QueryBuilder {
  /**
   * Current query sentence.
   */
  private _querySentence = '';

  /**
   * Get built query sentence.
   */
  public get querySentence(): string {
    return this._querySentence;
  }

  /**
   * Set query sentences.
   */
  public set querySentence(querySentence: string) {
    this._querySentence = querySentence;
  }

  /**
   * Reset query sentence.
   */
  public resetQuery() {
    this._querySentence = '';
  }

  /**
   * Create table.
   *
   * @param table name of the table.
   * @param columns column names of the table.
   * @param primaryKey primary key of the table.
   * @param foreignKeys foreign keys of the table.
   * @param uniqueColumns unique columns of the table.
   */
  public createTable(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: PrimaryKey,
    foreignKeys?: ForeignKey[],
    uniqueColumns?: Unique[],
  ): void {
    this._querySentence = new TableBuilder().build(
      table,
      columns,
      primaryKey,
      foreignKeys,
      uniqueColumns,
    );
  }

  /**
   * Create non-existent table.
   *
   * @param table name of the table.
   * @param columns column names of the table.
   * @param primaryKey primary key of the table.
   * @param foreignKeys foreign keys of the table.
   * @param uniqueColumns unique columns of the table.
   */
  public createTableIfNotExists(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: PrimaryKey,
    foreignKeys?: ForeignKey[],
    uniqueColumns?: Unique[],
  ): void {
    this.createTable(table, columns, primaryKey, foreignKeys, uniqueColumns);

    this._querySentence = this._querySentence.replace(
      'CREATE TABLE',
      'CREATE TABLE IF NOT EXISTS',
    );
  }

  /**
   * Create index of table.
   *
   * @param index index informations.
   */
  public createIndex(index: Index): void {
    this._querySentence = new ConstraintBuilder().index(index);
  }

  /**
   * Drop table.
   *
   * @param table name of the table.
   */
  public dropTable(table: string): void {
    this._querySentence = `DROP TABLE \`${table}\`;`;
  }

  /**
   * Drop existent table.
   *
   * @param table name of the table.
   */
  public dropTableIfExists(table: string): void {
    this.dropTable(table);

    this._querySentence = this._querySentence.replace(
      'DROP TABLE',
      'DROP TABLE IF EXISTS',
    );
  }

  /**
   * Insert data into table.
   *
   * @param table name of the table.
   * @param columns specified columns.
   * @param values list of array will be inserted.
   */
  public insert(table: string, columns: string[], values: string[][]): void {
    this._querySentence = `INSERT INTO ${table} (${columns
      .map((c) => `\`${c}\``)
      .join(', ')}) VALUES ("${values
      .map((value) => value.join('","'))
      .join('"), ("')}");`;
  }

  /**
   * Update data.
   *
   * @param table name of the table.
   * @param data new data.
   */
  public update(table: string, data: { [key: string]: any }): void {
    const c: string[] = [];

    for (const [key, value] of Object.entries(data)) {
      c.push(`\`${key}\` = '${value}'`);
    }

    this._querySentence = `UPDATE \`${table}\` SET ${c.join(', ')} ${
      this._querySentence
    }`;
  }

  /**
   * Delete data.
   *
   * @param table name of the table.
   */
  public delele(table: string): void {
    this._querySentence = `DELETE FROM \`${table}\` ${this._querySentence}`;
  }

  /**
   * Select columns
   *
   * @param columns selected columns.
   */
  public select(...columns: string[]): this {
    if (columns.includes('*')) {
      this._querySentence += 'SELECT *';
    } else {
      this._querySentence += `SELECT ${columns
        .map((c) => `\`${c.split('.').join('`.`').split(':').join('` AS `')}\``)
        .join(', ')}`;
    }

    return this;
  }

  /**
   * Add selection to current query sentences.
   *
   * @param columns specified columns.
   */
  public addSelection(...columns: string[]): this {
    const q = this._querySentence.split(' FROM ');

    q[0] += `, ${columns
      .map((c) => `\`${c.split('.').join('`.`').split(':').join('` AS `')}\``)
      .join(', ')}`;

    this._querySentence = q.join(' FROM ');

    return this;
  }

  /**
   * Select from tables.
   *
   * @param tables selected tables.
   */
  public from(...tables: string[]): this {
    this._querySentence += ` FROM (${tables
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
  public join(table: string, type: string = JoinTypes.inner()): this {
    this._querySentence += ` ${type} (\`${table}\`)`;

    return this;
  }

  /**
   * Start Where clause.
   *
   * @param conditions list of conditions.
   */
  public where(conditions: string[][] | ((q: QueryBuilder) => void)): this {
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
  public on(conditions: string[][] | ((q: QueryBuilder) => void)): this {
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
  public orWhere(conditions: string[][]): this {
    return this.whereClause(conditions, 'OR');
  }

  /**
   * Use AND operator.
   *
   * @param conditions list of conditions.
   */
  public andWhere(conditions: string[][]): this {
    return this.whereClause(conditions, 'AND');
  }

  /**
   * Use NOT operator.
   *
   * @param conditions list of conditions.
   */
  public notWhere(conditions: string[][]): this {
    return this.whereClause(conditions, 'NOT');
  }

  /**
   * Build conditions
   *
   * @param conditions list of conditions.
   * @param prefix word preceded list of conditions.
   */
  private whereClause(conditions: string[][], prefix: string): this {
    this._querySentence += ` ${prefix} (${conditions
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
  public groupBy(column: string): this {
    this._querySentence += ` GROUP BY (${column})`;

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  public orderBy(column: string, type: string = OrderTypes.ascending()): this {
    this._querySentence += ` ORDER BY (${column}) ${type}`;

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  public limit(number: number): this {
    this._querySentence += ` LIMIT ${number}`;

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  public min(column: string, alias?: string): this {
    return this.func(column, 'MIN', alias);
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  public max(column: string, alias?: string): this {
    return this.func(column, 'MAX', alias);
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  public sum(column: string, alias?: string): this {
    return this.func(column, 'SUM', alias);
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  public avg(column: string, alias?: string): this {
    return this.func(column, 'AVG', alias);
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  public count(column: string, alias?: string): this {
    return this.func(column, 'COUNT', alias);
  }

  /**
   * Use some simple SQL functions.
   *
   * @param column specified column.
   * @param name name of SQL function.
   */
  private func(column: string, name: string, alias = 'data'): this {
    this._querySentence = this._querySentence.replace(
      `\`${column.split('.').join('`.`')}\``,
      `${name}(\`${column.split('.').join('`.`')}\`) AS \`${alias}\``,
    );

    return this;
  }
}
