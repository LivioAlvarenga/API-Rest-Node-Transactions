import { env } from "./env";
import { Knex, knex as setupKnex } from "knex";

export const configKnex: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true, // required for sqlite
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(configKnex);
