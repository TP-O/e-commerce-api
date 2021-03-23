import { Model } from 'database/core';
import { Relation } from 'database/core/orm/relation';
import { Database } from 'database/core/database';

export class BelongsToMany extends Relation {
  /**
   *
   * @param table name of table having the relationship.
   * @param model related model.
   * @param refereignKey refereign key of the relationship.
   * @param localKey primary key of the realtionships.
   */
  public constructor(
    table: string,
    relatedModel: Model,
    private readonly relatedKey: string,
    private readonly ownerKey = 'id',
    private readonly pivotTable?: string,
    private readonly pivotModel?: Model,
    private readonly pivotName?: string,
  ) {
    super(table, relatedModel);
  }

  /**
   * Join two tables with conditions.
   *
   * @param table table instance.
   */
  protected withCondition() {
    if (this.pivotTable) {
      if (this.pivotModel) {
        this.relatedModel.relationship._items[
          this.pivotName || 'pivot_table'
        ] = {
          model: this.pivotModel || 'pivot_table',
          relationship: undefined,
        };

        Database.addSelection(
          ...Object.keys(this.pivotModel.schema).map(
            (c) =>
              `${this.pivotModel?.table}.${c}:${this.relation}-${
                this.pivotName || 'pivot_table'
              }-${c}`,
          ),
        );
      }

      Database.join(this.pivotTable, 'left join')
        .on([
          [`${this.table}.id`, '=', `${this.pivotTable}.${this.ownerKey}`],
        ])
        .join(this.relatedModel.table, 'left join')
        .on([
          [
            `${this.relatedModel.table}.id`,
            '=',
            `${this.pivotTable}.${this.relatedKey}`,
          ],
        ]);
    } else {
      Database.join(this.relatedModel.table, 'left join').on([
        [
          `${this.table}.${this.relatedKey}`,
          '=',
          `${this.relatedModel.table}.${this.ownerKey}`,
        ],
      ]);
    }
  }
}
