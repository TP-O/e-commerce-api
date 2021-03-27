import { Model } from 'database/core/orm/model';
import {
  Relationship,
  ModelInfor,
} from 'database/core/orm/interfaces/model-infor.interface';
import {
  BelongsToManyRelationship,
  BelongsToRelationship,
  HasManyRelationship,
  HasOneRelationship,
} from 'database/core/orm/interfaces/relation.interface';

export class Maker {
  /**
   * Create model.
   *
   * @param infor information of created model.
   */
  public static make(infor: ModelInfor) {
    const model = new Model(infor.table, infor.columns, infor.primaryKey, infor.fillable);

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

  private static bindHasOneRelationship(
    model: Model,
    relationships: HasOneRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.hasOne(r));
  }

  private static bindHasManyRelationship(
    model: Model,
    relationships: HasManyRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.hasMany(r));
  }

  private static bindBelongsToRelationship(
    model: Model,
    relationships: BelongsToRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.belongsTo(r));
  }

  private static bindBelongsToManyRelationship(
    model: Model,
    relationships: BelongsToManyRelationship[],
  ) {
    relationships.forEach((r) => model.relationship.belongsToMany(r));
  }
}
