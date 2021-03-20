import { Column } from '@database/core/builder/interfaces/column.interface';
import {
  ForeignKey,
  PrimaryKey,
  Unique,
} from '@database/core/builder/interfaces/constraint.interface';
import { ConstraintBuilder } from '@database/core/builder/constraint.builder';
import { ColumnBuilder } from '@database/core/builder/column.builder';

export class TableBuilder {
  private columnBuilder = new ColumnBuilder();

  private constraintBuilder = new ConstraintBuilder();

  build(
    table: string,
    columns: { [key: string]: Column },
    primaryKey?: PrimaryKey,
    foreignKeys?: ForeignKey[],
    uniqueColumns?: Unique,
  ) {
    const c: string[] = [];

    for (const [key, value] of Object.entries(columns)) {
      c.push(this.columnBuilder.build(key, value.type, value));
    }

    if (uniqueColumns) {
      c.push(this.constraintBuilder.unique(uniqueColumns));
    }

    if (primaryKey) {
      c.push(this.constraintBuilder.primaryKey(primaryKey));
    }

    if (foreignKeys) {
      foreignKeys?.forEach((foreignKey) => {
        c.push(this.constraintBuilder.foreignKey(foreignKey));
      });
    }

    return `CREATE TABLE \`${table}\` (${c.join(', ')});`;
  }
}
