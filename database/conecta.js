import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "gymmy", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});