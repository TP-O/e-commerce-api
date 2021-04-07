import { HasOne } from '@modules/database/core/orm/relation/has-one';
import { HasMany } from '@modules/database/core/orm/relation/has-many';
import { BelongsTo } from '@modules/database/core/orm/relation/belongs-to';
import { BelongsToMany } from '@modules/database/core/orm/relation/belongs-to-many';
import {
  BelongsToManyRelationship,
  BelongsToRelationship,
  HasManyRelationship,
  HasOneRelationship,
  RelationItem,
} from '@modules/database/core/orm/interfaces/relation';

export class RelationManager {
  /**
   * List of relationships.
   */
  public _items: { [key: string]: RelationItem } = {};

  /**
   *
   * @param _table name of table having relationships.
   */
  public constructor(private readonly _table: string) {}

  /**
   * Get specific relationship.
   *
   * @param name relationship name.
   */
  public get(name: string) {
    return this._items[name];
  }

  /**
   * Add HasOne relationship.
   */
  public hasOne(infor: HasOneRelationship) {
    this._items[infor.name] = {
      model: infor.relatedModel,
      relationship: new HasOne(
        this._table,
        infor.relatedModel,
        infor.foreignKey,
        infor.localKey,
      ),
    };
  }

  /**
   * Add BelongsTo relationship.
   */
  public belongsTo(infor: BelongsToRelationship) {
    this._items[infor.name] = {
      model: infor.relatedModel,
      relationship: new BelongsTo(
        this._table,
        infor.relatedModel,
        infor.foreignKey,
        infor.ownerKey,
      ),
    };
  }

  /**
   * Add HasMany relationship.
   */
  public hasMany(infor: HasManyRelationship) {
    this._items[infor.name] = {
      model: infor.relatedModel,
      relationship: new HasMany(
        this._table,
        infor.relatedModel,
        infor.foreignKey,
        infor.ownerKey,
        infor.pivot,
      ),
    };
  }

  /**
   * Add BelongsToMany relationship.
   */
  public belongsToMany(infor: BelongsToManyRelationship) {
    this._items[infor.name] = {
      model: infor.relatedModel,
      relationship: new BelongsToMany(
        this._table,
        infor.relatedModel,
        infor.assetKey,
        infor.ownerKey,
        infor.pivot,
      ),
    };
  }
}
