import { Model } from 'database/core/orm/model';
import { Relation } from 'database/core/orm/relation';
import { Database } from 'database/core/database';

export class BelongsTo extends Relation {
  /**
   *
   * @param table name of table having the relationship.
   * @param model related model.
   * @param foreignKey foreign key of the relationship.
   * @param ownerKey primary key of the relationship.
   */
  public constructor(
    table: string,
    relatedModel: Model,
    private readonly foreignKey: string,
    private readonly ownerKey = 'id',
  ) {
    super(table, relatedModel);
  }

  /**
   * Join two tables with conditions.
   *
   * @param table table instance.
   */
  protected withCondition() {
    Database.join(this.relatedModel.table, 'left join').on([
      [
        `${this.table}.${this.foreignKey}`,
        '=',
        `${this.relatedModel.table}.${this.ownerKey}`,
      ],
    ]);
  }
}
