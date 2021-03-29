import { Model } from '@database/core/orm/model';
import { Database } from '@database/core/database';

export abstract class Relation {
  protected relation = '';

  /**
   *
   * @param table name of table having this relationship.
   * @param model related model.
   */
  public constructor(
    protected readonly table: string,
    protected readonly relatedModel: Model,
  ) {}

  /**
   * Add specific columns table.
   *
   * @param table table instance.
   * @param relation name of relationship.
   */
  protected selectColumns(): void {
    Database.addSelection(
      ...this.relatedModel.columns.map(
        (c) => `${this.relatedModel.table}.${c}:${this.relation}-${c}`,
      ),
    );
  }

  /**
   * Join two tables with conditions.
   *
   * @param table table instance.
   */
  protected abstract withCondition(): void;

  /**
   * Create relationship in specific table.
   *
   * @param relation name of relationship.
   */
  public create(relation: string) {
    this.relation = relation;

    this.selectColumns();
    this.withCondition();
  }
}
