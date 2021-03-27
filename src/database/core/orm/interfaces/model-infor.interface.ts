import {
  BelongsToManyRelationship,
  BelongsToRelationship,
  HasManyRelationship,
  HasOneRelationship,
} from 'database/core/orm/interfaces/relation.interface';

export interface Relationship {
  hasOne?: HasOneRelationship[];
  hasMany?: HasManyRelationship[];
  belongsTo?: BelongsToRelationship[];
  belongsToMany?: BelongsToManyRelationship[];
}

export interface ModelInfor {
  table: string;
  schema: { [key: string]: any };
  primaryKey?: string;
  fillable: string[];
  relationships: Relationship;
}
