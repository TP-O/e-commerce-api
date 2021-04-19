import { readdir } from 'fs/promises';
import { Connection } from '@modules/database/core/connect/connection';
import { Command } from '@modules/database/core/console/command';
import { Migration } from '@modules/database/core/migration';
import { MigrateMigration } from '@modules/database/core/console/migration/migrate.migration';

export class RefreshMigration extends Command {
  protected _migrations: Migration[] = [];

  private _migrationDir = `${__dirname}/../../../migrations`;

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    if (this._migrations.length === 0) {
      const files = await readdir(this._migrationDir);

      files.forEach((file) => {
        if (file !== '.gitkeep') {
          this._migrations.push(
            require(`@modules/database/migrations/${file}`).default,
          );
        }
      });
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

      if (await Connection.isConnected()) {
        Object.values(this._migrations)
          .reverse()
          .forEach((migration) => {
            job = job.then(async () => await migration.drop());
          });

        return job.then(async () => {
          await new MigrateMigration().execute();
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
