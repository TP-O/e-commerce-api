import { createPool, Pool } from 'mysql2/promise';
import { databaseConfig } from '@configs/database';
import { singleton } from 'tsyringe';

@singleton()
export class Connection {
  /**
   * Request connection pool.
   */
  private pool: Pool | any;

  /**
   * Establish connection with the database.
   *
   * @param tries number of retries when an error occurs.
   */
  public async establish(): Promise<void> {
    if (await this.isConnected()) {
      return;
    }

    this.pool = createPool(databaseConfig);

    try {
      const connection = await this.pool.getConnection();

      connection.release();
    } catch (err) {
      console.error(`Connection failed (${err.message})`);

      await this.establish();
    }
  }

  /**
   * Check connection.
   */
  public async isConnected(): Promise<boolean> {
    if (this.pool) {
      try {
        const connection = await this.pool.getConnection();

        connection.release();

        return true;
      } catch (err) {
        console.error(`Connection failed (${err.message})`);
      }
    }

    return false;
  }

  /**
   * Excute with the given query.
   */
  public async execute(querySentence: string) {
    const [rows] = await this.pool.query(querySentence);

    return rows;
  }
}
