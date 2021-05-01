import { Model } from '@modules/database/core/orm/model';
import { Relationship } from '@modules/database/core/orm/relation/relationship';
import { Pivot } from '@modules/database/core/orm/interfaces/relation';
import { container } from 'tsyringe';
import { Database } from '@modules/database/core/database';

export class HasMany extends Relationship {
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
        container
          .resolve(Database)
          .join(this.pivot.table, 'left join')
          .on([
            [
              `${this.table}.${this.localKey}`,
              '=',
              `${this.pivot.table}.${this.pivot.ownerKey}`,
            ],
          ])
          .join(`${this.relatedModel.table}:${this.tableAlias}`, 'left join')
          .on([
            [
              `${this.tableAlias}.${this.foreignKey}`,
              '=',
              `${this.pivot.table}.${this.pivot.assetKey}`,
            ],
          ]);
      } else if (this.pivot.model) {
        this.relatedModel.relationship._items[
          this.pivot.name || 'pivot_table'
        ] = {
          model: this.pivot.name || 'pivot_table',
          relationship: undefined,
        };

        container
          .resolve(Database)
          .addSelection(
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
          .join(`${this.relatedModel.table}:${this.tableAlias}`, 'left join')
          .on([
            [
              `${this.tableAlias}.${this.foreignKey}`,
              '=',
              `${this.pivot.model.table}.${this.pivot.assetKey}`,
            ],
          ]);
      }
    } else {
      container
        .resolve(Database)
        .join(`${this.relatedModel.table}:${this.tableAlias}`, 'left join')
        .on([
          [
            `${this.table}.${this.localKey}`,
            '=',
            `${this.tableAlias}.${this.foreignKey}`,
          ],
        ]);
    }
  }
}
