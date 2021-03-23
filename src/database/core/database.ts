import { nodeConfig } from 'config/node.config';
import { Converter } from 'database/core/orm/convert';
import { Connection } from 'database/core/connect/connection';
import { Column } from 'database/core/builder/interfaces/column.interface';
import { Model } from 'database/core/orm/model';
import { QueryBuilder } from 'database/core/builder/query.builder';
import * as Cons from 'database/core/builder/interfaces/constraint.interface';

export class Database {
  /**
   * Name of table.
   */
  private static tableName = '';

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
    return this._builder.getQuery();
  }

  /**
   * Reset query sentence.
   */
  public static resetQuery() {
    this._builder.resetQuery();
  }

  /**
   * Create table.
   */
  public static create(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: Cons.PrimaryKey,
    foreignKeys?: Cons.ForeignKey[],
    uniqueColumns?: Cons.Unique,
  ) {
    this._builder.createTable(
      table,
      columns,
      primaryKey,
      foreignKeys,
      uniqueColumns,
    );

    return this.execute(true);
  }

  /**
   * Create table if not exists.
   */
  public static createIfNotExists(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: Cons.PrimaryKey,
    foreignKeys?: Cons.ForeignKey[],
    uniqueColumns?: Cons.Unique,
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
   */
  public static drop(table: string) {
    this._builder.dropTable(table);

    return this.execute(true);
  }

  /**
   * Drop table if exists.
   */
  public static dropIfExists(table: string) {
    this._builder.dropTableIfExists(table);

    return this.execute(true);
  }

  /**
   * Add index to table.
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
    this.tableName = tableName;

    return this;
  }

  /**
   * Insert data.
   */
  public static async insert(columns: string[], values: string[][]) {
    this._builder.insert(this.tableName, columns, values);

    return this.execute();
  }

  /**
   * Update data.
   */
  public static async update(data: { [key: string]: any }) {
    this._builder.update(this.tableName, data);

    return this.execute();
  }

  /**
   * Delete data.
   */
  public static async delete() {
    this._builder.delele(this.tableName);

    return this.execute();
  }

  /**
   * Select columns of the table.
   */
  public static select(...columns: string[]) {
    this._builder.select(...columns).from(this.tableName);

    return this;
  }

  public static addSelection(...columns: string[]) {
    this._builder.addSelection(...columns);

    return this;
  }

  /**
   * Join with another table.
   */
  public static join(table: string, type?: string) {
    this._builder.join(table, type);

    return this;
  }

  /**
   * Start conditions of joining.
   */
  /* eslint-disable-next-line */
  public static on(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._builder.on(conditions);

    return this;
  }

  /**
   * Start conditions.
   */
  /* eslint-disable-next-line */
  public static where(
    conditions: string[][] | ((q: QueryBuilder) => void),
  ) {
    this._builder.where(conditions);

    return this;
  }

  /**
   * OR condtion.
   */
  public static orWhere(conditions: string[][]) {
    this._builder.orWhere(conditions);

    return this;
  }

  /**
   * AND condition.
   */
  public static andWhere(conditions: string[][]) {
    this._builder.andWhere(conditions);

    return this;
  }

  /**
   * NOT condition.
   */
  public static notWhere(conditions: string[][]) {
    this._builder.notWhere(conditions);

    return this;
  }

  /**
   * Group the same results.
   */
  public static groupBy(column: string) {
    this._builder.groupBy(column);

    return this;
  }

  /**
   * Sort the results.
   */
  public static orderBy(column: string, type?: string) {
    this._builder.orderBy(column, type);

    return this;
  }

  /**
   * Limit the number of results.
   */
  public static limit(number: number) {
    this._builder.limit(number);

    return this;
  }

  /**
   * Select the minimum value of columns.
   */
  public static min(column: string, alias?: string) {
    this._builder.min(column, alias);

    return this;
  }

  /**
   * Select the maximum value of columns.
   */
  public static max(column: string, alias?: string) {
    this._builder.max(column, alias);

    return this;
  }

  /**
   * Calculate the sum of columns.
   */
  public static sum(column: string, alias?: string) {
    this._builder.sum(column, alias);

    return this;
  }

  /**
   * Calculate the average of column.
   */
  public static avg(column: string, alias?: string) {
    this._builder.avg(column, alias);

    return this;
  }

  /**
   * Count the number of rows.
   */
  public static count(column: string, alias?: string) {
    this._builder.count(column, alias);

    return this;
  }

  /**
   * Execute with current query.
   */
  public static async execute(throwable = false) {
    try {
      if (nodeConfig.env === 'development') {
        console.log(this._builder.getQuery());
      }

      const rows = await Connection.execute(this._builder.getQuery());

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
