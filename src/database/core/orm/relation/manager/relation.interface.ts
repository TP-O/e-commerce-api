import { Model } from '@database/core/orm/model';
import { Relation } from '@database/core/orm/relation';

export interface RelationItem {
  model: any;
  relationship: Relation | undefined;
}

export interface RelationInfor {
  name: string;
  relatedModel: Model;
  relatedKey: string;
  ownerKey?: string;
  pivotTable?: string;
  pivotModel?: Model;
  pivotName?: string;
}
