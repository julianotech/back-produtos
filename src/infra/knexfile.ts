import knex, { Knex } from "knex";
import { resolve } from "node:path";

import { dbConfig } from "./config";

interface FolderSettings {
  loadExtensions: string[];
  directory: string;
  extension: string;
}
function getFolderSettings(folder: string): FolderSettings {
  return {
    directory: resolve(__dirname, folder),
    loadExtensions: [".js", ".ts"],
    extension: "ts",
  };
}

const connection: Knex.Config = {
  client: dbConfig.DB_DRIVER,
  migrations: getFolderSettings("./migrations"),
  pool: { min: 0, max: 5, idleTimeoutMillis: 60000 },
  seeds: getFolderSettings("./seeds"),
  connection: {
    password: dbConfig.DB_PASSWORD,
    user: dbConfig.DB_USERNAME,
    database: dbConfig.DB_NAME,
    host: dbConfig.DB_HOST,
    port: dbConfig.DB_PORT,
    ssl: true,
  },
}

export function createConnection(): Knex {
  return knex(connection);
}

export default (): Knex.Config  => connection