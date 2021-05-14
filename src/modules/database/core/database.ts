import { Converter } from '@modules/database/core/orm/convert';
import { Connection } from '@modules/database/core/connect/connection';
import { QueryBuilder } from '@modules/database/core/builder/query-builder';
import * as Cons from '@modules/database/core/builder/interfaces/constraint-interface';
import { singleton } from 'tsyringe';
import { Table } from '@modules/database/core/builder/interfaces/table-interface';

@singleton()
export class Database {
  /**
   * Name of table.
   */
  private _tableName = '';

  /**
   * Constructor.
   *
   * @param _connection database connection.
   * @param _builder query builder.
   * @param _converter data converter.
   */
  public constructor(
    private _connection: Connection,
    private _builder: QueryBuilder,
    private _converter: Converter,
  ) {}

  /**
   * Get current query sentence.
   */
  public getQuery() {
    return this._builder.query;
  }

  /**
   * Create table.
   *
   * @param table table's information.
   */
  public create(table: Table) {
    this._builder.createTable(table);

    return this.execute(true);
  }

  /**
   * Create non-existent table.
   *
   * @param table table's information.
   */
  public createIfNotExists(table: Table) {
    this._builder.createTableIfNotExists(table);

    return this.execute(true);
  }

  /**
   * Drop table.
   *
   * @param table name of the table.
   */
  public drop(table: string) {
    this._builder.dropTable(table);

    return this.execute(true);
  }

  /**
   * Drop existent table.
   *
   * @param table name of the table.
   */
  public dropIfExists(table: string) {
    this._builder.dropTableIfExists(table);

    return this.execute(true);
  }

  /**
   * Create index of table.
   *
   * @param index index informations.
   */
  public createIndex(index: Cons.Index) {
    this._builder.createIndex(index);

    return this.execute(true);
  }

  /**
   * Select table.
   *
   * @param tableName name of selected table.
   */
  public table(tableName: string) {
    this._tableName = tableName;

    return this;
  }

  /**
   * Insert data into table.
   *
   * @param table name of the table.
   * @param columns specified columns.
   * @param values list of array will be inserted.
   */
  public async insert(columns: string[], values: string[][]) {
    this._builder.insert(this._tableName, columns, values);

    return this.execute();
  }

  /**
   * Update data.
   *
   * @param table name of the table.
   * @param data new data.
   */
  public async update(data: { [key: string]: any }) {
    this._builder.update(this._tableName, data);

    return this.execute();
  }

  /**
   * Delete data.
   *
   * @param table name of the table.
   */
  public async delete() {
    this._builder.delele(this._tableName);

    return this.execute();
  }

  /**
   * Select columns
   *
   * @param columns selected columns.
   */
  public select(...columns: string[]) {
    this._builder.select(...columns).from(this._tableName);

    return this;
  }

  /**
   * Add selection to current query sentences.
   *
   * @param columns specified columns.
   */
  public addSelection(...columns: string[]) {
    this._builder.addSelection(...columns);

    return this;
  }

  /**
   * Join table
   *
   * @param table joined table.
   * @param type type of join.
   */
  public join(table: string, type?: string) {
    this._builder.join(table, type);

    return this;
  }

  /**
   * Start conditions for joins.
   *
   * @param conditions list of conditions.
   */
  public on(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._builder.on(conditions);

    return this;
  }

  /**
   * Start Where clause.
   *
   * @param conditions list of conditions.
   */
  public where(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._builder.where(conditions);

    return this;
  }

  /**
   * Use OR operator.
   *
   * @param conditions list of conditions.
   */
  public orWhere(conditions: string[][]) {
    this._builder.orWhere(conditions);

    return this;
  }

  /**
   * Use AND operator.
   *
   * @param conditions list of conditions.
   */
  public andWhere(conditions: string[][]) {
    this._builder.andWhere(conditions);

    return this;
  }

  /**
   * Use NOT operator.
   *
   * @param conditions list of conditions.
   * @param operator logical operator.
   */
  public whereNot(conditions: string[][], operator = 'AND') {
    this._builder.whereNot(conditions, operator);

    return this;
  }

  /**
   * Group the same results.
   *
   * @param column specified column.
   */
  public groupBy(column: string) {
    this._builder.groupBy(column);

    return this;
  }

  /**
   * Start conditions for having.
   *
   * @param conditions list of conditions.
   */
  public having(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._builder.having(conditions);

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  public orderBy(column: string, type?: string) {
    this._builder.orderBy(column, type);

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  public limit(number: string) {
    this._builder.limit(number);

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  public min(column: string, alias?: string) {
    this._builder.min(column, alias);

    return this;
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  public max(column: string, alias?: string) {
    this._builder.max(column, alias);

    return this;
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  public sum(column: string, alias?: string) {
    this._builder.sum(column, alias);

    return this;
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  public avg(column: string, alias?: string) {
    this._builder.avg(column, alias);

    return this;
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  public count(column: string, alias?: string) {
    this._builder.count(column, alias);

    return this;
  }

  /**
   * Raw query.
   */
  public raw(query: string) {
    this._builder.raw(query);

    return this.execute();
  }

  /**
   * Execute with current query.
   */
  public async execute(throwable = false) {
    console.log(this.getQuery());
    const query = this._builder.build();

    try {
      const rows = await this._connection.execute(query);

      this._builder.build();

      return this._converter.convert(rows);
    } catch (err) {
      if (throwable) {
        throw err;
      }

      return { error: err.message };
    }
  }
}
