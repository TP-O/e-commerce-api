import { createPool, Pool } from 'mysql2/promise';
import { databaseConfig } from '@config/database.config';

export class Connection {
  /**
   * Request connection pool.
   */
  private static pool: Pool;

  /**
   * Establish connection with the database.
   *
   * @param tries number of retries when an error occurs.
   */
  public static async establish(): Promise<void> {
    if (await this.isConnected()) {
      return;
    }

    this.pool = createPool(databaseConfig);

    try {
      const connection = await this.pool.getConnection();

      connection.release();

      console.log('Database is connected');
    } catch (err) {
      console.error(`Connection failed (${err.message})`);

      await this.establish();
    }
  }

  /**
   * Check connection.
   */
  public static async isConnected(): Promise<boolean> {
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
  public static async execute(querySentence: string) {
    const [rows] = await this.pool.query(querySentence);

    return rows;
  }
}
