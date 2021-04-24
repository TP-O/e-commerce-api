import { Connection } from '@modules/database/core/connect/connection';
import { Command } from '@modules/database/core/console/command';
import { Seeder } from '@modules/database/core/seeder';
import { container, injectable } from 'tsyringe';

@injectable()
export class SeedSeeder extends Command {
  private _seeder: Seeder | undefined;

  private _seederFile = 'database.seeder';

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
  protected prepare(): void {
    const s = require(`@modules/database/seeders/${this._seederFile}`);
    this._seeder = container.resolve(s[Object.keys(s)[0]]);
  }

  /**
   * Execute command.
   */
  public async execute(): Promise<void> {
    try {
      await this._connection.establish();

      if (await this._connection.isConnected()) {
        this.prepare();

        await this._seeder?.seed();

        console.log('Database seeding completed successfully!');
      }
    } catch (err) {
      console.log(err);
    }
  }
}
