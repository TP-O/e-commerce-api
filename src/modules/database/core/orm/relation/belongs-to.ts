import { Model } from '@modules/database/core/orm/model';
import { Relationship } from '@modules/database/core/orm/relation/relationship';
import { Database } from '@modules/database/core/database';
import { container } from 'tsyringe';

export class BelongsTo extends Relationship {
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
    container
      .resolve(Database)
      .join(`${this.relatedModel.table}:${this.tableAlias}`, 'left join')
      .on([
        [
          `${this.table}.${this.foreignKey}`,
          '=',
          `${this.tableAlias}.${this.ownerKey}`,
        ],
      ]);
  }
}
