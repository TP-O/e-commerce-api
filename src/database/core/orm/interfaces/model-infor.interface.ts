import { RelationInfor } from 'database/core/orm/interfaces/relation.interface';

export type RelationInfors = { type: string; infor: RelationInfor };

export interface ModelInfor {
  table: string;
  schema: { [key: string]: any };
  primaryKey?: string;
  fillable: string[];
  relationships: RelationInfors[];
}
