import { Model } from '@database/core';
import { Relation } from '@database/core/orm/relation';
import { Database } from '@database/core/database';

export class BelongsTo extends Relation {
  /**
   *
   * @param table name of table having the relationship.
   * @param model related model.
   * @param refereignKey refereign key of the relationship.
   * @param ownerKey primary key of the realtionships.
   */
  public constructor(
    table: string,
    model: Model,
    private readonly refereignKey: string,
    private readonly ownerKey = 'id',
  ) {
    super(table, model);
  }

  /**
   * Join two tables with conditions.
   *
   * @param table table instance.
   */
  protected withCondition() {
    Database.join(this.model.table, 'left join').on([
      [
        `${this.table}.${this.refereignKey}`,
        '=',
        `${this.model.table}.${this.ownerKey}`,
      ],
    ]);
  }
}
