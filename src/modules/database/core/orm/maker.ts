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

export class Maker {
  /**
   * Create model.
   *
   * @param infor information of created model.
   */
  public static make(infor: ModelInfor) {
    const model = new Model(
      infor.table,
      infor.columns,
      infor.primaryKey,
      infor.fillable,
    );

    this.bindRelationships(model, infor.relationships);

    return model;
  }

  /**
   * Bind all relationships for created model
   *
   * @param model created model.
   * @param relationships all of relationships.
   */
  private static bindRelationships(model: Model, relationships: Relationship) {
    if (relationships.hasOne) {
      this.bindHasOneRelationship(model, relationships.hasOne);
    }
    if (relationships.hasMany) {
      this.bindHasManyRelationship(model, relationships.hasMany);
    }
    if (relationships.belongsTo) {
      this.bindBelongsToRelationship(model, relationships.belongsTo);
    }
    if (relationships.belongsToMany) {
      this.bindBelongsToManyRelationship(model, relationships.belongsToMany);
    }
  }

  /**
   * Create has-one relationships for the model.
   *
   * @param model related model.
   * @param relationships list of has-one relationships.
   */
  private static bindHasOneRelationship(
    model: Model,
    relationships: HasOneRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.hasOne(r));
  }

  /**
   * Create has-many relationships for the model.
   *
   * @param model related model.
   * @param relationships list of has-many relationships.
   */
  private static bindHasManyRelationship(
    model: Model,
    relationships: HasManyRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.hasMany(r));
  }

  /**
   * Create belongs-to relationships for the model.
   *
   * @param model related model.
   * @param relationships list of belongs-to relationships.
   */
  private static bindBelongsToRelationship(
    model: Model,
    relationships: BelongsToRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.belongsTo(r));
  }

  /**
   * Create belongs-to-many relationships for the model.
   *
   * @param model related model.
   * @param relationships list of belongs-to-many relationships.
   */
  private static bindBelongsToManyRelationship(
    model: Model,
    relationships: BelongsToManyRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.belongsToMany(r));
  }
}
