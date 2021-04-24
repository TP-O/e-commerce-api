import { readFile, writeFile } from 'fs/promises';
import { Command } from '@modules/database/core/console/command';

export class MakeSeeder extends Command {
  /**
   * Content of seeder file.
   */
  private _fileContent = '';

  /**
   * Content of seeder file.
   */
  private _distDir = `${__dirname}/../../../seeders/`;

  /**
   * Path to pattern file.
   */
  private _originFile = `${__dirname}/../../pattern/seeder.pattern.ts`;

  /**
   *
   * @param name name of table.
   */
  /* eslint-disable-next-line */
  public constructor(private _name: string) {
    super();
  }

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    const data = await readFile(this._originFile, 'utf-8');

    this._fileContent = data
      .replace(/xxx/g, this._name.split('-').join('_'))
      .replace(
        /XXX/g,
        this._name
          .split('-')
          .map((n) => n[0].toUpperCase() + n.slice(1))
          .join(''),
      );
  }

  /**
   * Execute command.
   */
  public async execute(): Promise<void> {
    await this.prepare();

    try {
      await writeFile(
        `${this._distDir}${this._name}.ts`,
        this._fileContent,
        'utf8',
      );

      console.log(`Created seeder: ${this._name}`);
    } catch (err) {
      console.error(err.message);
    }
  }
}
