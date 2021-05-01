import randomstring from 'randomstring';
import { Model } from '@modules/database/core/orm/model';
import { container } from 'tsyringe';
import { Database } from '@modules/database/core/database';

export abstract class Relationship {
  protected relation = '';

  protected tableAlias = '';

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
    container
      .resolve(Database)
      .addSelection(
        ...this.relatedModel.columns.map(
          (c) => `${this.tableAlias}.${c}:${this.relation}-${c}`,
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
    this.tableAlias = randomstring.generate(5);

    this.selectColumns();
    this.withCondition();
  }
}
