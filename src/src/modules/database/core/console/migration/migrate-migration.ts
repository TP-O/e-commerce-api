import { readdir } from 'fs/promises';
import { Command } from '@modules/database/core/console/command';
import { Migration } from '@modules/database/core/migration';
import { Connection } from '@modules/database/core/connect/connection';
import { database } from '@modules/helper';
import { autoInjectable, container } from 'tsyringe';
import { constructor } from 'tsyringe/dist/typings/types';

@autoInjectable()
export class MigrateMigration extends Command {
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
    let migrated: any;

    try {
      const { data } = await database((q) => {
        return q.table('migrations').select('*').execute(true);
      });
      migrated = data;
    } catch {
      migrated = [];
    }

    const files = await readdir(this._migrationDir);

    files.forEach((file) => {
      let existed = false;

      migrated?.map((m: any) => {
        if (m.migration === file.split('.')[0]) {
          existed = true;
        }
      });

      if (!existed && file !== '.gitkeep') {
        const m = require(`@modules/database/migrations/${file}`);
        this._migrations.push(m[Object.keys(m)[0]]);
      }
    });

    if (this._migrations.length === 0) {
      console.log('Everything is update-to-date');
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

        Object.values(this._migrations).forEach((migration) => {
          job = job.then(
            async () => await container.resolve(migration).create(),
          );
        });

        return job;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
