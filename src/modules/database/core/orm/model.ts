/* eslint-disable @typescript-eslint/no-this-alias */
import { Database } from '@modules/database/core/database';
import { QueryBuilder } from '@modules/database/core/builder/query-builder';
import { RelationshipManager } from '@modules/database/core/orm/relation/manager/relationship-manager';
import {
  BelongsToManyRelationship,
  BelongsToRelationship,
  HasManyRelationship,
  HasOneRelationship,
} from '@modules/database/core/orm/interfaces/relation';
import { autoInjectable, delay, inject } from 'tsyringe';

@autoInjectable()
export class Model {
  /**
   * Table's name.
   */
  private _table = 'unknown';

  /**
   * Primary key of the table.
   */
  private _primaryKey = 'id';

  /**
   * All columns of the table.
   */
  private _columns: string[] = [];

  /**
   * The columns having data changing.
   */
  private _fillable: string[] = [];

  /**
   * Manage relationships.
   */
  private _relationshipsManager: RelationshipManager;

  /**
   * Model being used.
   */
  public static usingModel: Model | any;

  /**
   * Constructor.
   *
   * @param _database database instance.
   */
  public constructor(
    @inject(delay(() => Database)) private _database: Database,
  ) {
    this._relationshipsManager = new RelationshipManager(this._table);
  }

  get table() {
    return this._table;
  }

  get primaryKey() {
    return this._primaryKey;
  }

  get columns() {
    return this._columns;
  }

  get fillable() {
    return this._fillable;
  }

  get relationship() {
    return this._relationshipsManager;
  }

  /**
   * Give table's information for the model.
   *
   * @param table table's name.
   * @param columns all columns of the table.
   * @param primaryKey primary key of the table.
   * @param fillable the columns having data changing.
   */
  public init(
    table: string,
    columns: string[],
    primaryKey = 'id',
    fillable: string[],
  ) {
    this._table = table;
    this._columns = columns;
    this._primaryKey = primaryKey;
    this._fillable = fillable;
    this._relationshipsManager = new RelationshipManager(this._table);
  }

  /**
   * Get data.
   */
  public async get() {
    Model.usingModel = this;

    const { data, error } = await this._database.execute();

    return data && !error ? { data } : { error };
  }

  /**
   * Get data.
   */
  public async first() {
    Model.usingModel = this;

    const { data, error } = await this._database.execute();

    return data && !error ? { data: data.first() } : { error };
  }

  /**
   * Get all data.
   */
  public async all() {
    Model.usingModel = this;

    const { data, error } = await this._database
      .table(this._table)
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
    const { status, error } = await this._database.table(this._table).insert(
      Object.keys(this.filter(items[0])),
      items.map((item) => Object.values(this.filter(item))),
    );

    return status &&
      status.insertId !== 0 &&
      status.affectedRows &&
      status.affectedRows >= 1
      ? { success: true, id: status.insertId }
      : { error: error || 'Unknown error' };
  }

  /**
   * Update data.
   *
   * @param value new values.
   */
  public async update(value: any) {
    const { status, error } = await this._database
      .table(this._table)
      .update(this.filter(value));

    return status && status.affectedRows && status.affectedRows > 0
      ? { success: true }
      : { error: error || 'Unknown error' };
  }

  /**
   * Delete data.
   */
  public async delete() {
    const { status, error } = await this._database.table(this._table).delete();

    return status && status.affectedRows && status.affectedRows > 0
      ? { success: true }
      : { error: error || 'Unknown error' };
  }

  /**
   * Select specific columns.
   *
   * @param columns list of specific columns.
   */
  public select(...columns: string[]) {
    // Add table name before each column.
    if (columns.includes('*')) {
      columns = this._columns.map((c) => `${this._table}.${c}`);
    } else {
      columns = columns.map((c) => `${this._table}.${c}`);
    }

    this._database.table(this._table).select(...columns);

    return this;
  }

  /**
   * Add selection to current query sentences.
   *
   * @param columns specified columns.
   */
  public addSelection(...columns: string[]) {
    this._database.addSelection(...columns);

    return this;
  }

  /**
   * Join table
   *
   * @param table joined table.
   * @param type type of join.
   */
  public join(table: string, type?: string) {
    this._database.join(table, type);

    return this;
  }

  /**
   * Start conditions for joins.
   *
   * @param conditions list of conditions.
   */
  public on(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._database.on(conditions);

    return this;
  }

  /**
   * Start conditions.
   *
   * @param coditions list of conditions.
   */
  public where(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._database.table(this._table).where(conditions);

    return this;
  }

  /**
   * AND conditions.
   *
   * @param conditions list of conditions.
   */
  public orWhere(conditions: string[][]) {
    this._database.orWhere(conditions);

    return this;
  }

  /**
   * AND conditions.
   *
   * @param conditions list of conditions.
   */
  public andWhere(conditions: string[][]) {
    this._database.andWhere(conditions);

    return this;
  }

  /**
   * NOT conditions.
   *
   * @param conditions list of conditions.
   * @param operator logical operator.
   */
  public whereNot(conditions: string[][], operator = 'AND') {
    this._database.whereNot(conditions, operator);

    return this;
  }

  /**
   * Group the same results.
   *
   * @param column specified column.
   */
  public groupBy(column: string) {
    this._database.groupBy(column);

    return this;
  }

  /**
   * Start conditions for having.
   *
   * @param conditions list of conditions.
   */
  public having(conditions: string[][] | ((q: QueryBuilder) => void)) {
    this._database.having(conditions);

    return this;
  }

  /**
   * Sort the results.
   *
   * @param column specified column.
   * @param type type of order.
   */
  public orderBy(column: string, type?: string) {
    this._database.orderBy(column, type);

    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param number maximum number of results.
   */
  public limit(number: string) {
    this._database.limit(number);

    return this;
  }

  /**
   * Select the minimum value of columns.
   *
   * @param column specified column.
   */
  public min(column: string, alias?: string) {
    this._database.min(column, alias);

    return this;
  }

  /**
   * Select the maximum value of columns.
   *
   * @param column specified column.
   */
  public max(column: string, alias?: string) {
    this._database.max(column, alias);

    return this;
  }

  /**
   * Calculate the sum of columns.
   *
   * @param column specified column.
   */
  public sum(column: string, alias?: string) {
    this._database.sum(column, alias);

    return this;
  }

  /**
   * Calculate the average of column.
   *
   * @param column specified column.
   */
  public avg(column: string, alias?: string) {
    this._database.avg(column, alias);

    return this;
  }

  /**
   * Count the number of rows.
   *
   * @param column specified column.
   */
  public count(column: string, alias?: string) {
    this._database.count(column, alias);

    return this;
  }

  /**
   * Load relationships.
   *
   * @param relations list of relationship names.
   */
  public with(...relations: string[]) {
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

    this._fillable.forEach((f) => {
      if (f in value && value[f] !== undefined) {
        filterdValue[f] = value[f];
      }
    });

    return filterdValue;
  }

  public hasOne(relationship: HasOneRelationship) {
    this.relationship.hasOne(relationship);
  }

  public hasMany(relationship: HasManyRelationship) {
    this.relationship.hasMany(relationship);
  }

  public belongsTo(relationship: BelongsToRelationship) {
    this.relationship.belongsTo(relationship);
  }

  public belongsToMany(relationship: BelongsToManyRelationship) {
    this.relationship.belongsToMany(relationship);
  }
}
