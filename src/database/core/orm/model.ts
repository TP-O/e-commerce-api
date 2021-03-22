/* eslint-disable @typescript-eslint/no-this-alias */
import { Database } from '@database/core/database';
import { QueryBuilder } from '@database/core/builder/query.builder';
import { RelationManager } from '@database/core/orm/relation/manager/relation.manager';

export class Model {
  /**
   * Manage relationships.
   */
  private readonly _relationManager: RelationManager;

  /**
   *
   * @param table name of the table that this model uses.
   * @param schema schema of the table.
   * @param primaryKey primary key of the table.
   */
  constructor(
    public readonly table: string,
    public readonly schema: { [key: string]: any },
    public readonly primaryKey = 'id',
  ) {
    this._relationManager = new RelationManager(table);
  }

  get relationship() {
    return this._relationManager;
  }

  /**
   * Get data.
   */
  async get() {
    console.log(Database.getQuery());
    Database.usingModel = this;

    const { data, error } = await Database.execute();

    return data && !error ? { data } : { error };
  }

  /**
   * Get all data.
   */
  async all() {
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
  async create(item: any) {
    const { status, error } = await Database.table(
      this.table,
    ).insert(Object.keys(item), [Object.values(item)]);

    return status && status.insertId !== 0 && status.affectedRows === 1
      ? { success: true }
      : { error: error || 'Unknown error' };
  }

  /**
   * Update data.
   *
   * @param value new values.
   */
  async update(value: any) {
    const { status, error } = await Database.table(this.table).update(
      value,
    );

    return status && status.affectedRows && status.affectedRows > 0
      ? { success: true }
      : { error: error || 'Unknown error' };
  }

  /**
   * Delete data.
   */
  async delete() {
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
  select(...columns: string[]): Model {
    // Add table name before each column.
    if (columns.includes('*')) {
      columns = Object.keys(this.schema).map((c) => `${this.table}.${c}`);
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
  where(conditions: string[][] | ((q: QueryBuilder) => void)): Model {
    Database.table(this.table).where(conditions);

    return this;
  }

  /**
   * AND conditions.
   *
   * @param conditions list of conditions.
   */
  orWhere(conditions: string[][]): Model {
    Database.orWhere(conditions);

    return this;
  }

  /**
   * AND conditions.
   *
   * @param conditions list of conditions.
   */
  andWhere(conditions: string[][]): Model {
    Database.andWhere(conditions);

    return this;
  }

  /**
   * NOT conditions.
   *
   * @param conditions list of conditions.
   */
  notWhere(conditions: string[][]): Model {
    Database.notWhere(conditions);

    return this;
  }

  /**
   * Group the same results.
   *
   * @param column specified column.
   */
  groupBy(column: string) {
    Database.groupBy(column);

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  orderBy(column: string, type?: string) {
    Database.orderBy(column, type);

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  limit(number: number) {
    Database.limit(number);

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  min(column: string, alias?: string) {
    Database.min(column, alias);

    return this;
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  max(column: string, alias?: string) {
    Database.max(column, alias);

    return this;
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  sum(column: string, alias?: string) {
    Database.sum(column, alias);

    return this;
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  avg(column: string, alias?: string) {
    Database.avg(column, alias);

    return this;
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  count(column: string, alias?: string) {
    Database.count(column, alias);

    return this;
  }

  /**
   * Load relationships.
   *
   * @param relations list of relationship names.
   */
  with(...relations: string[]): Model {
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
}
