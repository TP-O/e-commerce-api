import {
  ForeignKey,
  PrimaryKey,
  Unique,
} from '@modules/database/core/builder/interfaces/constraint-interface';
import { ConstraintBuilder } from '@modules/database/core/builder/constraint-builder';
import { ColumnBuilder } from '@modules/database/core/builder/column-builder';
import { autoInjectable } from 'tsyringe';
import { Builder } from '@modules/database/core/builder/interfaces/builder-interface';

@autoInjectable()
export class TableBuilder implements Builder {
  /**
   * Table's name.
   */
  private _table = 'unknown';

  /**
   * Table's columns.
   */
  private _columns: string[] = [];

  /**
   * Table's constraints.
   */
  private _constraints: string[] = [];

  /**
   * Constructor.
   *
   * @param _columnBuilder column builder.
   * @param _constraintBuilder constraint builder.
   */
  public constructor(
    private _columnBuilder: ColumnBuilder,
    private _constraintBuilder: ConstraintBuilder,
  ) {}

  /**
   * Set table's name.
   *
   * @param name table's name.
   */
  public table(name: string) {
    this._table = name;

    return this;
  }

  /**
   * Add a column.
   *
   * @param name column's name.
   */
  public column(name: string) {
    const c = this._columnBuilder.build();

    if (c !== '') {
      this._columns.push(c);
    }

    this._columnBuilder.column(name);

    return this;
  }

  /**
   * Set data type.
   *
   * @param type column's type.
   */
  public type(type: string) {
    this._columnBuilder.type(type);

    return this;
  }

  /**
   * Add unsigned constraint.
   */
  public unsigned() {
    this._columnBuilder.unsigned();

    return this;
  }

  /**
   * Add not null constraint.
   */
  public required() {
    this._columnBuilder.required();

    return this;
  }

  /**
   * Add default constraint.
   *
   * @param value default value.
   */
  public default(value: any) {
    this._columnBuilder.default(value);

    return this;
  }

  /**
   * Add increment constraint.
   */
  public increment() {
    this._columnBuilder.increment();

    return this;
  }

  /**
   * Add unique constraint.
   */
  public makeUnique() {
    this._columnBuilder.makeUnique();

    return this;
  }

  /**
   * Add null constraint.
   */
  public nullable() {
    this._columnBuilder.nullable();
  }

  /**
   * Set action when updated.
   *
   * @param value action.
   */
  public onUpdate(value: any) {
    this._columnBuilder.onUpdate(value);

    return this;
  }

  /**
   * Set action when deleted.
   *
   * @param value action.
   */
  public onDelete(value: any) {
    this._columnBuilder.onDelete(value);

    return this;
  }

  /**
   * Create primary key.
   *
   * @param key primary key information.
   */
  public addPrimaryKey(key: PrimaryKey) {
    this._constraints.push(this._constraintBuilder.addPrimaryKey(key));

    return this;
  }

  /**
   * Create foreign key.
   *
   * @param key foreign key information.
   */
  public addForeignKey(key: ForeignKey) {
    this._constraints.push(this._constraintBuilder.addForeignKey(key));

    return this;
  }

  /**
   * Create unique constraint.
   *
   * @param column unique constraint informations.
   */
  public addUniqueColumns(column: Unique) {
    this._constraints.push(this._constraintBuilder.addUniqueColumn(column));

    return this;
  }

  /**
   * Build the table.
   */
  public build() {
    this.column('');

    const result = `CREATE TABLE \`${this._table}\` (${this._columns.join(
      ', ',
    )}, ${this._constraints.join(', ')});`;

    this.reset();

    return result;
  }

  /**
   * Reset data.
   */
  public reset() {
    this._table = 'unknown';
    this._columns = [];
    this._constraints = [];
  }
}
