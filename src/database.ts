import "dotenv/config";
import { Knex, knex as setupKnex } from "knex";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL env not found.");
}

export const configKnex: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true, // required for sqlite
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(configKnex);
