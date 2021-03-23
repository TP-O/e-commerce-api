import { readdir } from 'fs/promises';
import { Command } from 'database/core/console/command';
import { Migration } from 'database/core/migration';
import { Connection } from 'database/core/connect/connection';
import { Database } from 'database/core/database';

export class MigrateMigration extends Command {
  protected _migrations: Migration[] = [];

  private _migrationDir = `${__dirname}/../../../migrations`;

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    let migrated: any;

    try {
      const { data } = await Database.table('migrations')
        .select('*')
        .execute(true);
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
        this._migrations.push(
          require(`@database/migrations/${file}`).default,
        );
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
      await Connection.establish();

      if (await Connection.isConnected()) {
        await this.prepare();

        let job = Promise.resolve();

        Object.values(this._migrations).forEach((migration) => {
          job = job.then(async () => await migration.create());
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
