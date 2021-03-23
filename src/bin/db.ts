import { MakeSeeder } from 'database/core/console/seeder/make.seeder';
import { SeedSeeder } from 'database/core/console/seeder/seed.seeder';
import { MakeMigration } from 'database/core/console/migration/make.migration';
import { MigrateMigration } from 'database/core/console/migration/migrate.migration';
import { RefreshMigration } from 'database/core/console/migration/refresh.migration';
import { RollbackMigration } from 'database/core/console/migration/rollback.migration';
import { argv } from 'process';

class Handler {
  /**
   * Listen command.
   */
  public async listen() {
    if (argv[2]) {
      const [p1, p2] = argv[2].split(':');

      switch (p1) {
        case 'make':
          this.make(p2, argv[3]);

          break;

        case 'seed':
          this.seed();

          break;

        case 'migrate':
          this.migrate(p2);

          break;

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
  public make(type: string, name: string) {
    if (!name) {
      console.log('Name is missing');

      return;
    }

    switch (type) {
      case 'migration':
        new MakeMigration(name).execute();

        break;

      case 'seeder':
        new MakeSeeder(name).execute();

        break;

      default:
        console.log('Command does not exist');

        break;
    }
  }

  /**
   * Handle seed commad.
   */
  public seed() {
    new SeedSeeder().execute();
  }

  /**
   * Handle migrate command.
   *
   * @param option migrate option..
   */
  public migrate(option = 'migrate') {
    switch (option) {
      case 'migrate':
        new MigrateMigration().execute();

        break;

      case 'refesh':
        new RefreshMigration().execute();

        break;

      case 'rollback':
        new RollbackMigration().execute();

        break;

      default:
        console.log('Command does not exist');

        break;
    }
  }
}

const hanler = new Handler();

hanler.listen();
