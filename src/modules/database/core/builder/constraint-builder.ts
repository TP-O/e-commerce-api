import {
  ForeignKey,
  Index,
  PrimaryKey,
  Unique,
} from '@modules/database/core/builder/interfaces/constraint-interface';
import { ConstraintType } from '@modules/database/core/builder/types/contraint-type';
import { injectable } from 'tsyringe';
import { Builder } from '@modules/database/core/builder/interfaces/builder-interface';

@injectable()
export class ConstraintBuilder implements Builder {
  /**
   * List of constraints.
   */
  private _cons: string[] = [];

  /**
   * Add unsigned constraint.
   */
  public unsigned() {
    this._cons.push(ConstraintType.unsigned());

    return this;
  }

  /**
   * Add not null constraint.
   */
  public required() {
    this._cons.push(ConstraintType.required());

    return this;
  }

  /**
   * Add default constraint.
   *
   * @param value default value.
   */
  public default(value: any) {
    this._cons.push(ConstraintType.defaults(value));

    return this;
  }

  /**
   * Add increment constraint.
   */
  public increment() {
    this._cons.push(ConstraintType.increment());

    return this;
  }

  /**
   * Add unique constraint.
   */
  public makeUnique() {
    this._cons.push(ConstraintType.unique());

    return this;
  }

  /**
   * Set action when updated.
   *
   * @param value action.
   */
  public onUpdate(value: any) {
    this._cons.push(ConstraintType.onUpdate(value));

    return this;
  }

  /**
   * Set action when deleted.
   *
   * @param value action.
   */
  public onDelete(value: any) {
    this._cons.push(ConstraintType.onDelete(value));

    return this;
  }

  /**
   * Create primary key.
   *
   * @param key primary key information.
   */
  public addPrimaryKey(key: PrimaryKey) {
    return key.name
      ? `CONSTRAINT ${key.name} PRIMARY KEY (${key.columns.join(', ')})`
      : `PRIMARY KEY (${key.columns.join(', ')})`;
  }

  /**
   * Create foreign key.
   *
   * @param key foreign key information.
   */
  public addForeignKey(key: ForeignKey) {
    const onUpdate = key.onUpdate ? `ON UPDATE ${key.onUpdate}` : '';
    const onDelete = key.onDelete ? `ON DELETE ${key.onDelete}` : '';

    return key.name
      ? `CONSTRAINT ${key.name} FOREIGN KEY (${key.column}) REFERENCES ${key.table}(${key.referencedColumn}) ${onUpdate} ${onDelete}`
      : `FOREIGN KEY (${key.column}) REFERENCES ${key.table}(${key.referencedColumn}) ${onUpdate} ${onDelete}`;
  }

  /**
   * Create unique constraint.
   *
   * @param column unique constraint informations.
   */
  public addUniqueColumn(column: Unique) {
    return column.name
      ? `CONSTRAINT ${column.name} UNIQUE (${column.columns.join(', ')})`
      : `UNIQUE (${column.columns.join(', ')})`;
  }

  /**
   * Create index constraint.
   *
   * @param index index constraint informations.
   */
  public createIndex(index: Index) {
    return index.unique
      ? `CREATE UNIQUE INDEX ${index.name} ON ${
          index.table
        } (${index.columns.join(', ')});`
      : `CREATE INDEX ${index.name} ON ${index.table} (${index.columns.join(
          ', ',
        )});`;
  }

  /**
   * Build the contraints.
   */
  public build(): string {
    const result = this._cons.join(' ');

    this.reset();

    return result;
  }

  /**
   * Reset data.
   */
  private reset() {
    this._cons = [];
  }
}
