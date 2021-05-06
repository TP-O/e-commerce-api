import { Model } from '@modules/database/core/orm/model';
import { Relationship } from '@modules/database/core/orm/relation/relationship';

export interface RelationItem {
  model: any;
  relationship: Relationship | undefined;
}

export interface Pivot {
  table?: string;
  model?: Model;
  name?: string;
  assetKey: string;
  ownerKey: string;
}

export interface Relationships {
  name: string;
  relatedModel: Model;
}

export interface HasOneRelationship extends Relationships {
  foreignKey: string;
  localKey?: string;
}

export interface BelongsToRelationship extends Relationships {
  foreignKey: string;
  ownerKey?: string;
}

export interface HasManyRelationship extends Relationships {
  foreignKey: string;
  ownerKey?: string;
  pivot?: Pivot;
}

export interface BelongsToManyRelationship extends Relationships {
  assetKey?: string;
  ownerKey?: string;
  pivot: Pivot;
}
