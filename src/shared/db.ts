// src/shared/db.ts

import { Sequelize } from "sequelize-typescript";
import path from "path";

// Avoid reinitializing on Lambda warm starts
let sequelize: Sequelize;

export const getDb = () => {
  if (!sequelize) {
    sequelize = new Sequelize({
      database: process.env.DB_NAME!,
      username: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT || 5432),
      dialect: "postgres",
      logging: false, // turn on if needed
      models: [path.resolve(__dirname, "..", "modules")],
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });
  }

  return sequelize;
};
