import { readFile, writeFile } from 'fs/promises';
import { Command } from '@database/core/console/command';

export class MakeSeeder extends Command {
  private _fileName: string;

  private _fileContent = '';

  private _distDir = `${__dirname}/../../../seeders/`;

  private _originFile = `${__dirname}/../../pattern/seeder.pattern.ts`;

  /**
   *
   * @param name name of table.
   */
  /* eslint-disable-next-line */
  public constructor(private _name: string) {
    super();

    this._fileName = `${_name}.seeder`;
  }

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    const data = await readFile(this._originFile, 'utf-8');

    this._fileContent = data.replace(/xxx/g, this._name).replace(
      /XXX/g,
      this._name
        .split('_')
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
      await writeFile(`${this._distDir}${this._fileName}.ts`, this._fileContent, 'utf8');

      console.log(`Created seeder: ${this._name}`);
    } catch (err) {
      console.error(err.message);
    }
  }
}
