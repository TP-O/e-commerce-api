import { Model } from '@modules/database/core/orm/model';
import { Relation } from '@modules/database/core/orm/relation';
import { Database } from '@modules/database/core/database';

export class HasOne extends Relation {
  /**
   *
   * @param table name of table having the relationship.
   * @param relatedModel related model.
   * @param foreignKey foreign key of the relationship.
   * @param localKey primary key of the relationship.
   */
  public constructor(
    table: string,
    relatedModel: Model,
    private readonly foreignKey: string,
    private readonly localKey = 'id',
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
        `${this.table}.${this.localKey}`,
        '=',
        `${this.relatedModel.table}.${this.foreignKey}`,
      ],
    ]);
  }
}
