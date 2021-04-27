import { readFile, writeFile } from 'fs/promises';
import { Command } from '@modules/database/core/console/command';

export class MakeMigration extends Command {
  /**
   * Name of migration file.
   */
  private _fileName: string;

  /**
   * Content of migration file.
   */
  private _fileContent = '';

  /**
   * Path to migration directory.
   */
  private _distDir = `${__dirname}/../../../migrations/`;

  /**
   * Path to pattern file.
   */
  private _originFile = `${__dirname}/../../pattern/migration.pattern.ts`;

  /**
   *
   * @param name name of table.
   */
  constructor(private _name = '') {
    super();

    this._fileName = `${new Date().getTime()}-${new Date()
      .toLocaleDateString()
      .replace(/\//g, '_')}-${_name}`;
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
