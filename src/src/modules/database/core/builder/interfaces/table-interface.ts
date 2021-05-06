import { Column } from '@modules/database/core/builder/interfaces/column-interface';
import {
  ForeignKey,
  PrimaryKey,
  Unique,
} from '@modules/database/core/builder/interfaces/constraint-interface';

export interface Table {
  table: string;
  columns: { [key: string]: Column };
  primaryKey?: PrimaryKey;
  foreignKeys?: ForeignKey[];
  uniqueColumns?: Unique[];
}
