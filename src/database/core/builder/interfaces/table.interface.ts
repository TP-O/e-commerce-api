import { Column } from '@database/core/builder/interfaces/column.interface';
import {
  ForeignKey,
  PrimaryKey,
} from '@database/core/builder/interfaces/constraint.interface';

export interface Table {
  name: string;
  colums: Column[];
  primaryKey: PrimaryKey;
  foreignKey: ForeignKey;
}
