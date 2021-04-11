/* eslint-disable @typescript-eslint/no-this-alias */
import { Database } from '@modules/database/core/database';
import { QueryBuilder } from '@modules/database/core/builder/query-builder';
import { RelationManager } from '@modules/database/core/orm/relation/manager/relation.manager';

export class Model {
  /**
   * Manage relationships.
   */
  private readonly _relationManager: RelationManager;

  /**
   *
   * @param table name of the table that this model uses.
   * @param columns colums of the table.
   * @param primaryKey primary key of the table.
   * @param fillable fillable columns.
   */
  constructor(
    public readonly table: string,
    public readonly columns: string[],
    public readonly primaryKey = 'id',
    public readonly fillable: string[] = [],
  ) {
    this._relationManager = new RelationManager(table);
  }

  get relationship() {
    return this._relationManager;
  }

  /**
   * Get data.
   */
  public async get() {
    Database.usingModel = this;

    const { data, error } = await Database.execute();

    return data && !error ? { data } : { error };
  }

  /**
   * Get all data.
   */
  public async all() {
    Database.usingModel = this;

    const { data, error } = await Database.table(this.table)
      .select('*')
      .execute();

    return data && !error ? { data } : { error };
  }

  /**
   * Insert new data.
   *
   * @param item new data.
   */
  public async create(items: any[]) {
    const { status, error } = await Database.table(this.table).insert(
      Object.keys(this.filter(items[0])),
      items.map((item) => Object.values(this.filter(item))),
    );

    return status && status.insertId !== 0 && status.affectedRows === 1
      ? { success: true }
      : { error: error || 'Unknown error' };
  }

  /**
   * Update data.
   *
   * @param value new values.
   */
  public async update(value: any) {
    const { status, error } = await Database.table(this.table).update(
      this.filter(value),
    );

    return status && status.affectedRows && status.affectedRows > 0
      ? { success: true }
      : { error: error || 'Unknown error' };
  }

  /**
   * Delete data.
   */
  public async delete() {
    const { status, error } = await Database.table(this.table).delete();

    return status && status.affectedRows && status.affectedRows > 0
      ? { success: true }
      : { error: error || 'Unknown error' };
  }

  /**
   * Select specific columns.
   *
   * @param columns list of specific columns.
   */
  public select(...columns: string[]): this {
    // Add table name before each column.
    if (columns.includes('*')) {
      columns = this.columns.map((c) => `${this.table}.${c}`);
    } else {
      columns = columns.map((c) => `${this.table}.${c}`);
    }

    Database.table(this.table).select(...columns);

    return this;
  }

  /**
   * Start conditions.
   *
   * @param coditions list of conditions.
   */
  public where(
    conditions: string[][] | ((q: QueryBuilder) => void),
  ): this {
    Database.table(this.table).where(conditions);

    return this;
  }

  /**
   * AND conditions.
   *
   * @param conditions list of conditions.
   */
  public orWhere(conditions: string[][]): this {
    Database.orWhere(conditions);

    return this;
  }

  /**
   * AND conditions.
   *
   * @param conditions list of conditions.
   */
  public andWhere(conditions: string[][]): this {
    Database.andWhere(conditions);

    return this;
  }

  /**
   * NOT conditions.
   *
   * @param conditions list of conditions.
   */
  public notWhere(conditions: string[][]): this {
    Database.notWhere(conditions);

    return this;
  }

  /**
   * Group the same results.
   *
   * @param column specified column.
   */
  public groupBy(column: string): this {
    Database.groupBy(column);

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  public orderBy(column: string, type?: string): this {
    Database.orderBy(column, type);

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  public limit(number: number): this {
    Database.limit(number);

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  public min(column: string, alias?: string): this {
    Database.min(column, alias);

    return this;
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  public max(column: string, alias?: string): this {
    Database.max(column, alias);

    return this;
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  public sum(column: string, alias?: string): this {
    Database.sum(column, alias);

    return this;
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  public avg(column: string, alias?: string): this {
    Database.avg(column, alias);

    return this;
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  public count(column: string, alias?: string): this {
    Database.count(column, alias);

    return this;
  }

  /**
   * Load relationships.
   *
   * @param relations list of relationship names.
   */
  public with(...relations: string[]): this {
    relations.forEach((relation) => {
      let curModel: Model = this;
      const nestedRelations = relation.split('.');

      // Load nested relationships
      nestedRelations.forEach((nestedRelation, i) => {
        curModel.relationship
          .get(nestedRelation)
          .relationship?.create(nestedRelations.slice(0, i + 1).join('-'));

        // Move on next model
        curModel = curModel.relationship.get(nestedRelation).model;
      });
    });

    return this;
  }

  /**
   * Filter user input.
   *
   * @param value user input.
   */
  private filter(value: any): any {
    const filterdValue: any = {};

    this.fillable.forEach((f) => {
      if (f in value) {
        filterdValue[f] = value[f];
      }
    });

    return filterdValue;
  }
}
