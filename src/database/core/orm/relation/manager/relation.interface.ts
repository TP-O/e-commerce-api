import { Model } from '@database/core/orm/model';
import { Relation } from '@database/core/orm/relation';

export interface RelationItem {
  model: any;
  relationship: Relation;
}

export interface RelationInfor {
  name: string;
  refereignKey: string;
  ownerKey?: string;
  model: Model;
  pivotTable?: string;
}
