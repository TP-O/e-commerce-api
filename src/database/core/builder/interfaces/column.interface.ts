import { Constraint } from 'database/core/builder/interfaces/constraint.interface';

export interface Column extends Constraint {
  type: string;
}
