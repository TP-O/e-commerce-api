import { readFile, writeFile } from 'fs/promises';
import { Command } from 'database/core/console/command';

export class MakeMigration extends Command {
  private _fileName: string;

  private _fileContent = '';

  private _distDir = `${__dirname}/../../../migrations/`;

  private _originFile = `${__dirname}/../../pattern/migration.pattern.ts`;

  /**
   *
   * @param name name of table.
   */
  constructor(private _name = '') {
    super();

    this._fileName = `${new Date().getTime()}-${new Date()
      .toLocaleDateString()
      .replace(/\//g, '_')}-create_${_name}_table`;
  }

  /**
   * Prepare data.
   */
  protected async prepare(): Promise<void> {
    const data = await readFile(this._originFile, 'utf-8');

    this._fileContent = data
      .replace(/xxx/g, this._name)
      .replace(/XXX/g, this._name[0].toUpperCase() + this._name.slice(1));
  }

  /**
   * Execute command.
   */
  async execute(): Promise<void> {
    await this.prepare();

    try {
      await writeFile(
        `${this._distDir}${this._fileName}.ts`,
        this._fileContent,
        'utf8',
      );

      console.log(`Created Migration: ${this._fileName}`);
    } catch (err) {
      console.error(err.message);
    }
  }
}
