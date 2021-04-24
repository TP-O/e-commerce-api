import { ConstraintBuilder } from '@modules/database/core/builder/constraint-builder';
import { autoInjectable } from 'tsyringe';
import { Builder } from '@modules/database/core/builder/interfaces/builder-interface';

@autoInjectable()
export class ColumnBuilder implements Builder {
  /**
   * Column's name.
   */
  private _column = '';

  /**
   * Column's type.
   */
  private _type = '';

  /**
   * Constructor.
   *
   * @param _constraintBuilder constraint builder.
   */
  public constructor(private _constraintBuilder: ConstraintBuilder) {}

  /**
   * Set column's name.
   *
   * @param name column's name.
   */
  public column(name: string) {
    this._column = name;

    return this;
  }

  /**
   * Set data type.
   *
   * @param type column's type.
   */
  public type(type: string) {
    this._type = type;

    return this;
  }

  /**
   * Add unsigned constraint.
   */
  public unsigned() {
    this._constraintBuilder.unsigned();

    return this;
  }

  /**
   * Add not null constraint.
   */
  public required() {
    this._constraintBuilder.required();

    return this;
  }

  /**
   * Add default constraint.
   *
   * @param value default value.
   */
  public default(value: any) {
    this._constraintBuilder.default(value);

    return this;
  }

  /**
   * Add increment constraint.
   */
  public increment() {
    this._constraintBuilder.increment();

    return this;
  }

  /**
   * Add unique constraint.
   */
  public makeUnique() {
    this._constraintBuilder.makeUnique();

    return this;
  }

  /**
   * Set action when updated.
   *
   * @param value action.
   */
  public onUpdate(value: any) {
    this._constraintBuilder.onUpdate(value);

    return this;
  }

  /**
   * Set action when deleted.
   *
   * @param value action.
   */
  public onDelete(value: any) {
    this._constraintBuilder.onDelete(value);

    return this;
  }

  /**
   * Build the column.
   */
  public build() {
    if (this._column == '' || this._type == '') {
      return '';
    }

    const result = `\`${this._column}\` ${
      this._type
    } ${this._constraintBuilder.build()}`;

    this.reset();

    return result;
  }

  /**
   * Reset data.
   */
  private reset() {
    this._column = '';
    this._type = '';
  }
}
