import { config } from 'dotenv';
config();

export const env = Object.freeze({
  port: Number(process.env.PORT) || 3000,
});

export const dbConfig = Object.freeze({
  DB_USERNAME: process.env.DB_USERNAME || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'postgres',
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'postgres',
  DB_DRIVER: process.env.DB_DRIVER || 'pg',
});
