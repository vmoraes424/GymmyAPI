import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";

export const TreinoTipo = sequelize.define("tipo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
}, {
  timestamps: false
});
