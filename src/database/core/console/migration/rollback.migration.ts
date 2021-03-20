import { readdir } from 'fs/promises';
import { Command } from '@database/core/console/command';
import { Migration } from '@database/core/migration';
import { Connection } from '@database/core/connect/connection';
import { Database } from '@database/core/database';

export class RollbackMigration extends Command {
  protected _migrations: Migration[] = [];

  private _migrationDir = `${__dirname}/../../../migrations`;

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    if (this._migrations.length === 0) {
      const files = await readdir(this._migrationDir);
      const { data } = await Database.table('migrations')
        .select('batch')
        .max('batch')
        .execute(true);

      const { data: migrated } = await Database.table('migrations')
        .select('*')
        .where([['batch', '=', `v:${data?.first().data}`]])
        .execute(true);

      files.forEach((file) => {
        let matched = false;

        migrated?.map((m) => {
          if (m.migration === file.split('.')[0]) {
            matched = true;
          }
        });

        if (matched) {
          this._migrations.push(
            require(`@database/migrations/${file}`).default,
          );
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
      await Connection.establish();

      await this.prepare();

      let job = Promise.resolve();

      Object.values(this._migrations)
        .reverse()
        .forEach((migration) => {
          job = job.then(async () => await migration.drop());
        });
    } catch (err) {
      console.log(err);
    }
  }
}
