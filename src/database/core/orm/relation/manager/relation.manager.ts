import { HasOne } from '@database/core/orm/relation/has-one';
import { HasMany } from '@database/core/orm/relation/has-many';
import { BelongsTo } from '@database/core/orm/relation/belongs-to';
import { BelongsToMany } from '@database/core/orm/relation/belongs-to-many';
import {
  RelationItem,
  RelationInfor,
} from '@database/core/orm/relation/manager/relation.interface';

export class RelationManager {
  /**
   * List of relationships.
   */
  private _items: { [key: string]: RelationItem } = {};

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
  public hasOne(infor: RelationInfor): void {
    this._items[infor.name] = {
      model: infor.model,
      relationship: new HasOne(
        this._table,
        infor.model,
        infor.refereignKey,
        infor.ownerKey,
      ),
    };
  }

  /**
   * Add BelongsTo relationship.
   */
  public belongsTo(infor: RelationInfor): void {
    this._items[infor.name] = {
      model: infor.model,
      relationship: new BelongsTo(
        this._table,
        infor.model,
        infor.refereignKey,
        infor.ownerKey,
      ),
    };
  }

  /**
   * Add HasMany relationship.
   */
  public hasMany(infor: RelationInfor): void {
    this._items[infor.name] = {
      model: infor.model,
      relationship: new HasMany(
        this._table,
        infor.model,
        infor.refereignKey,
        infor.ownerKey,
        infor.pivotTable,
      ),
    };
  }

  /**
   * Add BelongsToMany relationship.
   */
  public belongsToMany(infor: RelationInfor): void {
    this._items[infor.name] = {
      model: infor.model,
      relationship: new BelongsToMany(
        this._table,
        infor.model,
        infor.refereignKey,
        infor.ownerKey,
        infor.pivotTable,
      ),
    };
  }
}
