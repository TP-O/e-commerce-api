import { Converter } from '@database/core/orm/convert';
import { Connection } from '@database/core/connect/connection';
import { Column } from '@database/core/builder/interfaces/column.interface';
import { Model } from '@database/core/orm/model';
import { QueryBuilder } from '@database/core/builder/query.builder';
import * as Cons from '@database/core/builder/interfaces/constraint.interface';

export class Database {
  /**
   * Name of table.
   */
  private static _tableName = '';

  /**
   * Query builder.
   */
  private static _builder = new QueryBuilder();

  /**
   * Data converter.
   */
  private static _converter = new Converter();

  /**
   * Mode calling Database.
   */
  public static usingModel: Model;

  /**
   * Get current query sentence.
   */
  public static getQuery() {
    return this._builder.querySentence;
  }

  /**
   * Reset query sentence.
   */
  public static resetQuery() {
    this._builder.resetQuery();
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
  public static create(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: Cons.PrimaryKey,
    foreignKeys?: Cons.ForeignKey[],
    uniqueColumns?: Cons.Unique[],
  ) {
    this._builder.createTable(table, columns, primaryKey, foreignKeys, uniqueColumns);

    return this.execute(true);
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
  public static createIfNotExists(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: Cons.PrimaryKey,
    foreignKeys?: Cons.ForeignKey[],
    uniqueColumns?: Cons.Unique[],
  ) {
    this._builder.createTableIfNotExists(
      table,
      columns,
      primaryKey,
      foreignKeys,
      uniqueColumns,
    );

    return this.execute(true);
  }

  /**
   * Drop table.
   *
   * @param table name of the table.
   */
  public static drop(table: string) {
    this._builder.dropTable(table);

    return this.execute(true);
  }

  /**
   * Drop existent table.
   *
   * @param table name of the table.
   */
  public static dropIfExists(table: string) {
    this._builder.dropTableIfExists(table);

    return this.execute(true);
  }

  /**
   * Create index of table.
   *
   * @param index index informations.
   */
  public static createIndex(index: Cons.Index) {
    this._builder.createIndex(index);

    return this.execute(true);
  }

  /**
   * Select table.
   *
   * @param tableName name of selected table.
   */
  public static table(tableName: string) {
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
  public static async insert(columns: string[], values: string[][]) {
    this._builder.insert(this._tableName, columns, values);

    return this.execute();
  }

  /**
   * Update data.
   *
   * @param table name of the table.
   * @param data new data.
   */
  public static async update(data: { [key: string]: any }) {
    this._builder.update(this._tableName, data);

    return this.execute();
  }

  /**
   * Delete data.
   *
   * @param table name of the table.
   */
  public static async delete() {
    this._builder.delele(this._tableName);

    return this.execute();
  }

  /**
   * Select columns
   *
   * @param columns selected columns.
   */
  public static select(...columns: string[]) {
    this._builder.select(...columns).from(this._tableName);

    return this;
  }

  /**
   * Add selection to current query sentences.
   *
   * @param columns specified columns.
   */
  public static addSelection(...columns: string[]) {
    this._builder.addSelection(...columns);

    return this;
  }

  /**
   * Join table
   *
   * @param table joined table.
   * @param type type of join.
   */
  public static join(table: string, type?: string) {
    this._builder.join(table, type);

    return this;
  }

  /**
   * Start conditions for joins.
   *
   * @param conditions list of conditions.
   */
  public static on(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._builder.on(conditions);

    return this;
  }

  /**
   * Start Where clause.
   *
   * @param conditions list of conditions.
   */
  public static where(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._builder.where(conditions);

    return this;
  }

  /**
   * Use OR operator.
   *
   * @param conditions list of conditions.
   */
  public static orWhere(conditions: string[][]) {
    this._builder.orWhere(conditions);

    return this;
  }

  /**
   * Use AND operator.
   *
   * @param conditions list of conditions.
   */
  public static andWhere(conditions: string[][]) {
    this._builder.andWhere(conditions);

    return this;
  }

  /**
   * Use NOT operator.
   *
   * @param conditions list of conditions.
   */
  public static notWhere(conditions: string[][]) {
    this._builder.notWhere(conditions);

    return this;
  }

  /**
   * Group the same results.
   *
   * @param column specified column.
   */
  public static groupBy(column: string) {
    this._builder.groupBy(column);

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  public static orderBy(column: string, type?: string) {
    this._builder.orderBy(column, type);

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  public static limit(number: number) {
    this._builder.limit(number);

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  public static min(column: string, alias?: string) {
    this._builder.min(column, alias);

    return this;
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  public static max(column: string, alias?: string) {
    this._builder.max(column, alias);

    return this;
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  public static sum(column: string, alias?: string) {
    this._builder.sum(column, alias);

    return this;
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  public static avg(column: string, alias?: string) {
    this._builder.avg(column, alias);

    return this;
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  public static count(column: string, alias?: string) {
    this._builder.count(column, alias);

    return this;
  }

  /**
   * Raw query.
   */
  public static raw(querySentence: string) {
    this._builder.querySentence = querySentence;

    return this.execute();
  }

  /**
   * Execute with current query.
   */
  public static async execute(throwable = false) {
    try {
      const rows = await Connection.execute(this.getQuery());

      this._builder.resetQuery();

      return this._converter.convert(rows);
    } catch (err) {
      this._builder.resetQuery();

      if (throwable) {
        throw err;
      }

      return { error: err.message };
    }
  }
}
