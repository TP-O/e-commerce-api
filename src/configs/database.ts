import { env } from 'process';

export const databaseConfig = {
  host: env.DB_HOST || 'localhost',
  port: parseInt(env.DB_PORT || '3306', 10),
  database: env.DB_DATABASE || 'database',
  user: env.DB_USERNAME || 'root',
  password: env.DB_PASSWORD || '',
  waitForConnections: true,
  connectionLimit: 10,
};
