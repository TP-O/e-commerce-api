import { Database } from '@database/core/database';
import { DataType } from '@database/core/builder/types/data.type';

export abstract class Migration {
  /**
   * Name of the table will be created.
   */
  protected table = '';

  /**
   * Name of migration.
   */
  protected migrationName = '';

  /**
   * Number of migrating times.
   */
  private static currentBatch = 0;

  /**
   * Create the table.
   */
  public async create(): Promise<void> {
    try {
      console.log(`Migrating: ${this.migrationName}`);

      await this.up();
      await this.createMigrationsTable();
      await this.insertMigration();

      console.log(`Migrated: ${this.migrationName}`);
    } catch (err) {
      console.error(`Failed: ${this.migrationName} (${err.message})`);
    }
  }

  /**
   * Drop the table.
   */
  public async drop(): Promise<void> {
    try {
      console.log(`Dropping: ${this.migrationName}`);

      await this.down();
      await this.deleteMigration();

      console.log(`Dropped: ${this.migrationName}`);
    } catch (err) {
      console.error(`Failed: ${this.migrationName} (${err.message})`);
    }
  }

  /**
   * Create table `migrations` to manage migrations.
   */
  private async createMigrationsTable(): Promise<void> {
    await Database.createIfNotExists(
      'migrations',
      {
        id: {
          type: DataType.bigInt(),
          unsigned: true,
          unique: true,
          increment: true,
          required: true,
        },
        migration: {
          type: DataType.varChar(255),
          required: true,
          unique: true,
        },
        batch: {
          type: DataType.int(),
          required: true,
        },
        created_at: {
          type: DataType.timestamp(),
          default: 'current_timestamp',
        },
      },
      {
        columns: ['id'],
      },
    );
  }

  /**
   * Insert created migration to table migrations.
   */
  private async insertMigration(): Promise<void> {
    await this.getCurrentBatch();
    await Database.table('migrations').insert(
      ['migration', 'batch'],
      [[this.migrationName, `${Migration.currentBatch}`]],
    );
  }

  /**
   * Delete dropped migration to table migrations.
   */
  private async deleteMigration(): Promise<void> {
    await Database.table('migrations')
      .where([['migration', '=', `v:${this.migrationName}`]])
      .delete();
  }

  /**
   * Get number of migrating times.
   */
  private async getCurrentBatch() {
    if (Migration.currentBatch === 0) {
      const { data } = await Database.table('migrations')
        .select('batch')
        .max('batch')
        .execute(true);

      if (data?.count() === 0) {
        Migration.currentBatch = 1;
      } else {
        Migration.currentBatch = data?.first().data + 1;
      }
    }
  }

  /**
   * Do somethings in migrating.
   */
  protected abstract up(): Promise<void>;

  /**
   * Do somethings in unmigrating.
   */
  protected abstract down(): Promise<void>;
}
