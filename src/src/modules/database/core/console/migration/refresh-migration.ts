import { readdir } from 'fs/promises';
import { Connection } from '@modules/database/core/connect/connection';
import { Command } from '@modules/database/core/console/command';
import { Migration } from '@modules/database/core/migration';
import { MigrateMigration } from '@modules/database/core/console/migration/migrate-migration';
import { autoInjectable, container } from 'tsyringe';
import { constructor } from 'tsyringe/dist/typings/types';

@autoInjectable()
export class RefreshMigration extends Command {
  /**
   * List of migration classes.
   */
  protected _migrations: constructor<Migration>[] = [];

  /**
   * Path to migraion directory.
   */
  private _migrationDir = `${__dirname}/../../../migrations`;

  /**
   * Constructor.
   *
   * @param _connection database connection.
   * @param _migrate migrate database.
   */
  public constructor(
    private _connection: Connection,
    private _migrate: MigrateMigration,
  ) {
    super();
  }

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    if (this._migrations.length === 0) {
      const files = await readdir(this._migrationDir);

      files.forEach((file) => {
        if (file !== '.gitkeep') {
          const m = require(`@modules/database/migrations/${file}`);
          this._migrations.push(m[Object.keys(m)[0]]);
        }
      });
    }
  }

  /**
   * Execute command.
   */
  public async execute(): Promise<void> {
    try {
      await this._connection.establish();

      await this.prepare();

      let job = Promise.resolve();

      if (await this._connection.isConnected()) {
        Object.values(this._migrations)
          .reverse()
          .forEach((migration) => {
            job = job.then(
              async () => await container.resolve(migration).drop(),
            );
          });

        return job.then(async () => {
          await this._migrate.execute();
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
