import { Connection } from '@database/core/connect/connection';
import { Command } from '@database/core/console/command';
import { Seeder } from '@database/core/seeder';

export class SeedSeeder extends Command {
  private _seeder: Seeder | undefined;

  private _seederFile = 'database.seeder';

  /**
   * Prepare data.
   */
  protected prepare(): void {
    this._seeder = require(`@database/seeders/${this._seederFile}`).default;
  }

  /**
   * Execute command.
   */
  async execute(): Promise<void> {
    try {
      await Connection.establish();

      if (await Connection.isConnected()) {
        this.prepare();

        await this._seeder?.seed();

        console.log('Database seeding completed successfully!');
      }
    } catch (err) {
      console.log(err);
    }
  }
}
