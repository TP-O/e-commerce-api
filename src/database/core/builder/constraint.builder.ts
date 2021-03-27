import {
  Constraint,
  ForeignKey,
  Index,
  PrimaryKey,
  Unique,
} from 'database/core/builder/interfaces/constraint.interface';
import * as Types from 'database/core/builder/types/contraint.type';

export class ConstraintBuilder {
  primaryKey({ name, columns }: PrimaryKey): string {
    return `CONSTRAINT ${name || ''} PRIMARY KEY (${columns.join(', ')})`;
  }

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

  unique(unique: Unique[]): string[] {
    return unique.map((u) => `CONSTRAINT ${u.name} UNIQUE (${u.columns.join(', ')})`);
  }

  index({ name, unique, table, columns }: Index) {
    return unique
      ? `CREATE UNIQUE INDEX ${name} ON ${table} (${columns.join(', ')});`
      : `CREATE INDEX ${name} ON ${table} (${columns.join(', ')});`;
  }

  build(constraints: Constraint): string {
    const cons: string[] = [];

    if (constraints.unsigned) {
      cons.push(Types.unsigned());
    }
    if (constraints.required) {
      cons.push(Types.required());
    }
    if (constraints.default) {
      cons.push(Types.defaults(constraints.default));
    }
    if (constraints.increment) {
      cons.push(Types.increment());
    }
    if (constraints.unique) {
      cons.push(Types.unique());
    }
    if (constraints.onUpdate) {
      cons.push(Types.onUpdate(constraints.onUpdate));
    }
    if (constraints.onDelete) {
      cons.push(Types.onDelete(constraints.onDelete));
    }

    return cons.join(' ');
  }
}
