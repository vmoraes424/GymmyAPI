import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// export const sequelize = new Sequelize({
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DATABASE,
//   dialect: "mysql",
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
// });

export const sequelize = new Sequelize({
  username: "root",
  password: "",
  database: "gymmy",
  dialect: "mysql",
  host: "localhost",
  port: "3306",
});