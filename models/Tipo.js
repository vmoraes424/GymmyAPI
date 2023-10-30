import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";
import { Treino } from "./Treino.js";

export const Tipo = sequelize.define("tipo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
});
