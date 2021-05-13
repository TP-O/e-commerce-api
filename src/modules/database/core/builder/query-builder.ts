import { ConstraintBuilder } from '@modules/database/core/builder/constraint-builder';
import { JoinTypes } from '@modules/database/core/builder/types/join-type';
import { OrderTypes } from '@modules/database/core/builder/types/order-type';
import { TableBuilder } from '@modules/database/core/builder/table-builder';
import { Index } from '@modules/database/core/builder/interfaces/constraint-interface';
import { autoInjectable } from 'tsyringe';
import { Builder } from '@modules/database/core/builder/interfaces/builder-interface';
import { Table } from '@modules/database/core/builder/interfaces/table-interface';

@autoInjectable()
export class QueryBuilder implements Builder {
  /**
   * Current query sentence.
   */
  private _query = '';

  /**
   * Constructor.
   *
   * @param _constraintBuilder constraint builder.
   * @param _tableBuilder table builder.
   */
  public constructor(
    private _constraintBuilder: ConstraintBuilder,
    private _tableBuilder: TableBuilder,
  ) {}

  /**
   * Get built query sentence.
   */
  public get query(): string {
    return this._query;
  }

  /**
   * Create table.
   *
   * @param table table's information.
   */
  public createTable(table: Table) {
    const result = this._tableBuilder.table(table.table);

    if (table.primaryKey) {
      result.addPrimaryKey(table.primaryKey);
    }

    table.foreignKeys?.forEach((key) => {
      result.addForeignKey(key);
    });

    table.uniqueColumns?.forEach((column) => {
      result.addUniqueColumns(column);
    });

    Object.keys(table.columns).forEach((name) => {
      result.column(name).type(table.columns[name].type);

      if (table.columns[name].unsigned) {
        result.unsigned();
      }
      if (table.columns[name].increment) {
        result.increment();
      }
      if (table.columns[name].default) {
        result.default(table.columns[name].default);
      }
      if (table.columns[name].required) {
        result.required();
      }
      if (table.columns[name].unique) {
        result.makeUnique();
      }
      if (table.columns[name].nullable) {
        result.nullable();
      }
      if (table.columns[name].onDelete) {
        result.onDelete(table.columns[name].onDelete);
      }
      if (table.columns[name].onUpdate) {
        result.onUpdate(table.columns[name].onUpdate);
      }
    });

    this._query = result.build();
  }

  /**
   * Create non-existent table.
   *
   * @param table table's information.
   */
  public createTableIfNotExists(table: Table) {
    this.createTable(table);

    this._query = this._query.replace(
      'CREATE TABLE',
      'CREATE TABLE IF NOT EXISTS',
    );
  }

  /**
   * Create index of table.
   *
   * @param index index informations.
   */
  public createIndex(index: Index) {
    this._query = this._constraintBuilder.createIndex(index);
  }

  /**
   * Drop table.
   *
   * @param table name of the table.
   */
  public dropTable(table: string) {
    this._query = `DROP TABLE \`${table}\`;`;
  }

  /**
   * Drop existent table.
   *
   * @param table name of the table.
   */
  public dropTableIfExists(table: string) {
    this.dropTable(table);

    this._query = this._query.replace('DROP TABLE', 'DROP TABLE IF EXISTS');
  }

  /**
   * Insert data into table.
   *
   * @param table name of the table.
   * @param columns specified columns.
   * @param values list of array will be inserted.
   */
  public insert(table: string, columns: string[], values: string[][]) {
    this._query = `INSERT INTO ${table} (${columns
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
  public update(table: string, data: { [key: string]: any }) {
    const c: string[] = [];

    for (const [key, value] of Object.entries(data)) {
      c.push(`\`${key}\` = '${value}'`);
    }

    this._query = `UPDATE \`${table}\` SET ${c.join(', ')} ${this._query}`;
  }

  /**
   * Delete data.
   *
   * @param table name of the table.
   */
  public delele(table: string) {
    this._query = `DELETE FROM \`${table}\` ${this._query}`;
  }

  /**
   * Select columns
   *
   * @param columns selected columns.
   */
  public select(...columns: string[]) {
    if (columns.includes('*')) {
      this._query += 'SELECT *';
    } else {
      this._query += `SELECT ${columns
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
  public addSelection(...columns: string[]) {
    const q = this._query.split(' FROM ');

    q[0] += `, ${columns
      .map((c) => `\`${c.split('.').join('`.`').split(':').join('` AS `')}\``)
      .join(', ')}`;

    this._query = q.join(' FROM ');

    return this;
  }

  /**
   * Select from tables.
   *
   * @param tables selected tables.
   */
  public from(...tables: string[]) {
    this._query += ` FROM (${tables
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
  public join(table: string, type: string = JoinTypes.inner()) {
    this._query += ` ${type} (\`${table.split(':').join('` AS `')}\`)`;

    return this;
  }

  /**
   * Start Where clause.
   *
   * @param conditions list of conditions.
   */
  public where(conditions: string[][] | ((q: QueryBuilder) => void)) {
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
  public on(conditions: string[][] | ((q: QueryBuilder) => void)) {
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
  public orWhere(conditions: string[][]) {
    return this.whereClause(conditions, 'OR');
  }

  /**
   * Use AND operator.
   *
   * @param conditions list of conditions.
   */
  public andWhere(conditions: string[][]) {
    return this.whereClause(conditions, 'AND');
  }

  /**
   * Use NOT operator.
   *
   * @param conditions list of conditions.
   * @param operator logical operator.
   */
  public whereNot(conditions: string[][], operator = 'AND') {
    return this.whereClause(conditions, `${operator} NOT`);
  }

  /**
   * Build conditions
   *
   * @param conditions list of conditions.
   * @param prefix word preceded list of conditions.
   */
  private whereClause(conditions: string[][], prefix: string) {
    this._query += ` ${prefix} (${conditions
      .map((c, i) => {
        if (prefix !== 'HAVING') {
          c[0] = `\`${c[0].split('.').join('`.`')}\``;
        } else {
          const [aggregate, column] = c[0].split('(');

          c[0] = `${aggregate}(\`${column
            .slice(0, -1)
            .split('.')
            .join('`.`')}\`)`;
        }

        const opr = i == conditions.length - 1 ? '' : c[3] || 'AND';

        return `${c.splice(0, 3).join(' ')} ${opr}`;
      })
      .join(' ')})`;

    return this;
  }

  /**
   * Group the same results.
   *
   * @param column specified column.
   */
  public groupBy(column: string) {
    this._query += ` GROUP BY (\`${column.split(':').join('` AS `')}\`)`;

    return this;
  }

  /**
   * Start conditions for having.
   *
   * @param conditions list of conditions.
   */
  public having(conditions: string[][] | ((q: QueryBuilder) => void)) {
    if (typeof conditions === 'function') {
      conditions(this);
    } else {
      return this.whereClause(conditions, 'HAVING');
    }

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  public orderBy(column: string, type: string = OrderTypes.ascending()) {
    this._query += ` ORDER BY (${column}) ${type}`;

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  public limit(number: string) {
    this._query += ` LIMIT ${number}`;

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  public min(column: string, alias?: string) {
    return this.func(column, 'MIN', alias);
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  public max(column: string, alias?: string) {
    return this.func(column, 'MAX', alias);
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  public sum(column: string, alias?: string) {
    return this.func(column, 'SUM', alias);
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  public avg(column: string, alias?: string) {
    return this.func(column, 'AVG', alias);
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  public count(column: string, alias?: string) {
    return this.func(column, 'COUNT', alias);
  }

  /**
   * Use some simple SQL functions.
   *
   * @param column specified column.
   * @param name name of SQL function.
   */
  private func(column: string, name: string, alias = 'data') {
    this._query = this._query.replace(
      `\`${column.split('.').join('`.`')}\``,
      `${name}(\`${column.split('.').join('`.`')}\`) AS \`${alias}\``,
    );

    return this;
  }

  /**
   * Set query.
   *
   * @param query raw query.
   */
  public raw(query: string) {
    this._query = query;
  }

  /**
   * Build the query.
   */
  public build() {
    const result = this._query;

    this.resetQuery();

    return result;
  }

  /**
   * Reset query sentence.
   */
  private resetQuery() {
    this._query = '';
  }
}
