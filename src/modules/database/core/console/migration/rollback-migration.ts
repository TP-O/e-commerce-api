import { readdir } from 'fs/promises';
import { Command } from '@modules/database/core/console/command';
import { Migration } from '@modules/database/core/migration';
import { Connection } from '@modules/database/core/connect/connection';
import { database } from '@modules/helper';
import { autoInjectable, container } from 'tsyringe';
import { constructor } from 'tsyringe/dist/typings/types';

@autoInjectable()
export class RollbackMigration extends Command {
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
   */
  public constructor(private _connection: Connection) {
    super();
  }

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    if (this._migrations.length === 0) {
      const files = await readdir(this._migrationDir);

      const { data } = await database((q) => {
        return q.table('migrations').select('batch').max('batch').execute(true);
      });

      const { data: migrated } = await database((q) => {
        return q
          .table('migrations')
          .select('*')
          .where([['batch', '=', `'${data?.first().data}'`]])
          .execute(true);
      });

      files.forEach((file) => {
        let matched = false;

        migrated?.map((m: any) => {
          if (m.migration === file.split('.')[0]) {
            matched = true;
          }
        });

        if (matched) {
          const m = require(`@modules/database/migrations/${file}`);
          this._migrations.push(m[Object.keys(m)[0]]);
        }
      });

      if (this._migrations.length === 0) {
        console.log('There is nothing to rollback');
      }
    }
  }

  /**
   * Execute command.
   */
  public async execute(): Promise<void> {
    try {
      await this._connection.establish();

      if (await this._connection.isConnected()) {
        await this.prepare();

        let job = Promise.resolve();

        Object.values(this._migrations)
          .reverse()
          .forEach((migration) => {
            job = job.then(
              async () => await container.resolve(migration).drop(),
            );
          });

        return job;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
