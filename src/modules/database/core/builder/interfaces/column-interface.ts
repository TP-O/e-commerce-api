import { Constraint } from '@modules/database/core/builder/interfaces/constraint-interface';

export interface Column extends Constraint {
  type: string;
}
