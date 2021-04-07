import { Constraint } from '@modules/database/core/builder/interfaces/constraint-interface';
import { ConstraintBuilder } from '@modules/database/core/builder/constraint-builder';

export class ColumnBuilder {
  private contraintBuilder = new ConstraintBuilder();

  public build(
    column: string,
    type: string,
    contraints?: string | Constraint,
  ): string {
    return typeof contraints === 'string'
      ? `\`${column}\` ${type} ${contraints}`
      : `\`${column}\` ${type} ${this.contraintBuilder.build(
          contraints || {},
        )}`;
  }
}
