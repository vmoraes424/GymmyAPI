import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";
import { TreinoTipo } from "./TreinoTipo.js";

export const Treino = sequelize.define("treino", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});
Treino.belongsTo(
  TreinoTipo,
  { foreignKey: "tipo_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);
TreinoTipo.hasMany(
  Treino,
  { foreignKey: "tipo_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);
