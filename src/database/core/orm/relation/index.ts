import { Model } from '@database/core';
import { Database } from '@database/core/database';

export abstract class Relation {
  /**
   *
   * @param table name of table having this relationship.
   * @param model related model.
   */
  public constructor(
    protected readonly table: string,
    protected readonly model: Model,
  ) {}

  /**
   * Add specific columns table.
   *
   * @param table table instance.
   * @param relation name of relationship.
   */
  protected selectColumns(relation: string): void {
    Database.addSelection(
      ...Object.keys(this.model.schema).map(
        (c) => `${this.model.table}.${c}:${relation}-${c}`,
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
    this.selectColumns(relation);
    this.withCondition();
  }
}
