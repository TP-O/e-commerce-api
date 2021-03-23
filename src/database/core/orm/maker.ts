import { Model } from 'database/core/orm/model';
import {
  ModelInfor,
  RelationInfors,
} from 'database/core/orm/interfaces/model-infor.interface';

export class Maker {
  /**
   * Create model.
   *
   * @param infor information of created model.
   */
  public static make(infor: ModelInfor) {
    const model = new Model(
      infor.table,
      infor.schema,
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
   */
  private static bindRelationships(
    model: Model,
    relationships: RelationInfors[],
  ) {
    relationships.forEach((r) => {
      switch (r.type) {
        case 'hasOne':
          model.relationship.hasOne(r.infor);

          break;

        case 'hasMany':
          model.relationship.hasMany(r.infor);

          break;

        case 'belongsTo':
          model.relationship.belongsTo(r.infor);

          break;

        case 'belongsToMany':
          model.relationship.belongsToMany(r.infor);

          break;

        default:
          break;
      }
    });
  }
}
