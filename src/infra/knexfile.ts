import knex, { Knex } from "knex";
import { resolve } from "node:path";

import { DBConfig } from "./contracts";
import { dbConfig } from "./config";

const buildConnectionConfig = (config: DBConfig): Knex.Config => {
  return {
    client: config.DB_DRIVER,
    pool: { min: 0, max: 5, idleTimeoutMillis: 60000 },
    connection: {
      password: config.DB_PASSWORD,
      user: config.DB_USERNAME,
      database: config.DB_NAME,
      host: config.DB_HOST,
      port: config.DB_PORT,
      ssl: true,
    },
    migrations: {
      directory: resolve(__dirname, "./migrations"),
      extension: "ts",
      loadExtensions: [".ts", ".js"],
    },
    seeds: {
      directory: resolve(__dirname, "./seeds"),
      extension: "ts",
      loadExtensions: [".js", ".ts"],
    },
  };
};

export function createConnection(config: DBConfig): Knex {
  return knex(buildConnectionConfig(config));
}

export default async function (): Promise<Knex.Config> {
  return {
    ...buildConnectionConfig(dbConfig),
  };
}
