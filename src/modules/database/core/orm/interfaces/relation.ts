import { Model } from '@modules/database/core/orm/model';
import { Relation } from '@modules/database/core/orm/relation';

export interface RelationItem {
  model: any;
  relationship: Relation | undefined;
}

export interface Pivot {
  table?: string;
  model?: Model;
  name?: string;
  assetKey: string;
  ownerKey: string;
}

export interface Relationship {
  name: string;
  relatedModel: Model;
}

export interface HasOneRelationship extends Relationship {
  foreignKey: string;
  localKey?: string;
}

export interface BelongsToRelationship extends Relationship {
  foreignKey: string;
  ownerKey?: string;
}

export interface HasManyRelationship extends Relationship {
  foreignKey: string;
  ownerKey?: string;
  pivot?: Pivot;
}

export interface BelongsToManyRelationship extends Relationship {
  assetKey?: string;
  ownerKey?: string;
  pivot: Pivot;
}
