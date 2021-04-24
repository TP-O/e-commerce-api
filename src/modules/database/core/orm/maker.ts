import { Model } from '@modules/database/core/orm/model';
import {
  Relationship,
  ModelInfor,
} from '@modules/database/core/orm/interfaces/model-infor';
import {
  BelongsToManyRelationship,
  BelongsToRelationship,
  HasManyRelationship,
  HasOneRelationship,
} from '@modules/database/core/orm/interfaces/relation';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class Maker {
  /**
   * Constructor.
   *
   * @param model craeted model.
   */
  public constructor(private _model: Model) {}

  /**
   * Create model.
   *
   * @param infor information of created model.
   */
  public make(infor: ModelInfor) {
    this._model.init(
      infor.table,
      infor.columns,
      infor.primaryKey,
      infor.fillable,
    );

    this.bindRelationships(infor.relationships);

    return this._model;
  }

  /**
   * Bind all relationships for created model
   *
   * @param relationships all of relationships.
   */
  private bindRelationships(relationships: Relationship) {
    if (relationships.hasOne) {
      this.bindHasOneRelationship(relationships.hasOne);
    }
    if (relationships.hasMany) {
      this.bindHasManyRelationship(relationships.hasMany);
    }
    if (relationships.belongsTo) {
      this.bindBelongsToRelationship(relationships.belongsTo);
    }
    if (relationships.belongsToMany) {
      this.bindBelongsToManyRelationship(relationships.belongsToMany);
    }
  }

  /**
   * Create has-one relationships for the model.
   *
   * @param relationships list of has-one relationships.
   */
  private bindHasOneRelationship(relationships: HasOneRelationship[]) {
    relationships.forEach((r) => this._model.relationship.hasOne(r));
  }

  /**
   * Create has-many relationships for the model.
   *
   * @param relationships list of has-many relationships.
   */
  private bindHasManyRelationship(relationships: HasManyRelationship[]) {
    relationships.forEach((r) => this._model.relationship.hasMany(r));
  }

  /**
   * Create belongs-to relationships for the model.
   *
   * @param relationships list of belongs-to relationships.
   */
  private bindBelongsToRelationship(relationships: BelongsToRelationship[]) {
    relationships.forEach((r) => this._model.relationship.belongsTo(r));
  }

  /**
   * Create belongs-to-many relationships for the model.
   *
   * @param relationships list of belongs-to-many relationships.
   */
  private bindBelongsToManyRelationship(
    relationships: BelongsToManyRelationship[],
  ) {
    relationships.forEach((r) => this._model.relationship.belongsToMany(r));
  }
}
