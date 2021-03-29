import { Model } from '@database/core/orm/model';
import { Relation } from '@database/core/orm/relation';
import { Database } from '@database/core/database';
import { Pivot } from '@database/core/orm/interfaces/relation.interface';

export class HasMany extends Relation {
  /**
   *
   * @param table name of table having the relationship.
   * @param relatedModel related model.
   * @param foreignKey foreign key of the relationship.
   * @param localKey primary key of the relationship.
   * @param pivot information of pivot table.
   */
  public constructor(
    table: string,
    relatedModel: Model,
    private readonly foreignKey: string,
    private readonly localKey = 'id',
    private readonly pivot?: Pivot,
  ) {
    super(table, relatedModel);
  }

  /**
   * Join tables with conditions.
   */
  protected withCondition() {
    if (this.pivot) {
      if (this.pivot.table) {
        Database.join(this.pivot.table, 'left join')
          .on([
            [
              `${this.table}.${this.localKey}`,
              '=',
              `${this.pivot.table}.${this.pivot.ownerKey}`,
            ],
          ])
          .join(this.relatedModel.table, 'left join')
          .on([
            [
              `${this.relatedModel.table}.${this.foreignKey}`,
              '=',
              `${this.pivot.table}.${this.pivot.assetKey}`,
            ],
          ]);
      } else if (this.pivot.model) {
        this.relatedModel.relationship._items[this.pivot.name || 'pivot_table'] = {
          model: this.pivot.name || 'pivot_table',
          relationship: undefined,
        };

        Database.addSelection(
          ...this.pivot.model.columns.map(
            (c) =>
              `${this.pivot?.model?.table}.${c}:${this.relation}-${
                this.pivot?.name || 'pivot_table'
              }-${c}`,
          ),
        )
          .join(this.pivot.model.table, 'left join')
          .on([
            [
              `${this.table}.${this.localKey}`,
              '=',
              `${this.pivot.model.table}.${this.pivot.ownerKey}`,
            ],
          ])
          .join(this.relatedModel.table, 'left join')
          .on([
            [
              `${this.relatedModel.table}.${this.foreignKey}`,
              '=',
              `${this.pivot.model.table}.${this.pivot.assetKey}`,
            ],
          ]);
      }
    } else {
      Database.join(this.relatedModel.table, 'left join').on([
        [
          `${this.table}.${this.localKey}`,
          '=',
          `${this.relatedModel.table}.${this.foreignKey}`,
        ],
      ]);
    }
  }
}
