import {
  Constraint,
  ForeignKey,
  Index,
  PrimaryKey,
  Unique,
} from 'database/core/builder/interfaces/constraint.interface';
import { ConstraintType } from 'database/core/builder/types/contraint.type';

export class ConstraintBuilder {
  /**
   * Create primary key.
   *
   * @param param0 primary key information.
   */
  primaryKey({ name, columns }: PrimaryKey): string {
    return `CONSTRAINT ${name || ''} PRIMARY KEY (${columns.join(', ')})`;
  }

  /**
   * Create foreign key.
   *
   * @param param0 foreign key information.
   */
  foreignKey({
    name,
    column,
    table,
    referencedColumn,
    onUpdate,
    onDelete,
  }: ForeignKey): string {
    return `CONSTRAINT ${name} FOREIGN KEY (${column}) REFERENCES ${table}(${referencedColumn}) ${
      onUpdate ? `ON UPDATE ${onUpdate}` : ''
    } ${onDelete ? `ON DELETE ${onDelete}` : ''}`;
  }

  /**
   * Create unique constraint.
   *
   * @param unique unique constraint informations.
   */
  unique(unique: Unique[]): string[] {
    return unique.map((u) => `CONSTRAINT ${u.name} UNIQUE (${u.columns.join(', ')})`);
  }

  /**
   * Create index constraint.
   *
   * @param param0 index constraint informations.
   */
  index({ name, unique, table, columns }: Index): string {
    return unique
      ? `CREATE UNIQUE INDEX ${name} ON ${table} (${columns.join(', ')});`
      : `CREATE INDEX ${name} ON ${table} (${columns.join(', ')});`;
  }

  /**
   * Build contraints.
   *
   * @param constraints all contraints will be built.
   */
  build(constraints: Constraint): string {
    const cons: string[] = [];

    if (constraints.unsigned) {
      cons.push(ConstraintType.unsigned());
    }
    if (constraints.required) {
      cons.push(ConstraintType.required());
    }
    if (constraints.default) {
      cons.push(ConstraintType.defaults(constraints.default));
    }
    if (constraints.increment) {
      cons.push(ConstraintType.increment());
    }
    if (constraints.unique) {
      cons.push(ConstraintType.unique());
    }
    if (constraints.onUpdate) {
      cons.push(ConstraintType.onUpdate(constraints.onUpdate));
    }
    if (constraints.onDelete) {
      cons.push(ConstraintType.onDelete(constraints.onDelete));
    }

    return cons.join(' ');
  }
}
