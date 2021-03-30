import { argv, exit } from 'process';
import { MakeSeeder } from '@database/core/console/seeder/make.seeder';
import { SeedSeeder } from '@database/core/console/seeder/seed.seeder';
import { MakeMigration } from '@database/core/console/migration/make.migration';
import { MigrateMigration } from '@database/core/console/migration/migrate.migration';
import { RefreshMigration } from '@database/core/console/migration/refresh.migration';
import { RollbackMigration } from '@database/core/console/migration/rollback.migration';

class Handler {
  /**
   * Listen command.
   */
  public async listen() {
    if (argv[2]) {
      const [p1, p2] = argv[2].split(':');

      switch (p1) {
        case 'make':
          return this.make(p2, argv[3]);

        case 'seed':
          return this.seed();

        case 'migrate':
          return this.migrate(p2);

        default:
          console.log('Command does not exist');

          break;
      }
    } else {
      console.log('Nothing to execute');
    }
  }

  /**
   * Handle make command.
   *
   * @param type type of maked thing.
   * @param name name of maked thing.
   */
  public async make(type: string, name: string) {
    if (!name) {
      console.log('Name is missing');

      return;
    }

    switch (type) {
      case 'migration':
        return new MakeMigration(name).execute();

      case 'seeder':
        return new MakeSeeder(name).execute();

      default:
        console.log('Command does not exist');

        break;
    }
  }

  /**
   * Handle seed commad.
   */
  public async seed() {
    return new SeedSeeder().execute();
  }

  /**
   * Handle migrate command.
   *
   * @param option migrate option..
   */
  public async migrate(option = 'migrate') {
    switch (option) {
      case 'migrate':
        return new MigrateMigration().execute();

      case 'refresh':
        return new RefreshMigration().execute();

      case 'rollback':
        return new RollbackMigration().execute();

      default:
        console.log('Command does not exist');

        break;
    }
  }
}

(async () => {
  const hanler = new Handler();

  await hanler.listen();

  exit();
})();
