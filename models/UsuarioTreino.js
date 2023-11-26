import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecta.js";
import { Usuario } from "./Usuario.js";
import { TreinoDescricao } from "./TreinoDescricao.js";
import { Semanas } from "./Semanas.js";

export const UsuarioTreino = sequelize.define("usuario_treino", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  qntSemanas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

UsuarioTreino.belongsTo(
  Usuario,
  { foreignKey: "usuario_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);
Usuario.hasMany(
  UsuarioTreino,
  { foreignKey: "usuario_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);

UsuarioTreino.belongsTo(
  TreinoDescricao,
  { foreignKey: "treino_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);
TreinoDescricao.hasMany(
  UsuarioTreino,
  { foreignKey: "treino_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);
UsuarioTreino.belongsTo(
  TreinoDescricao,
  { foreignKey: "treinador_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);
TreinoDescricao.hasMany(
  UsuarioTreino,
  { foreignKey: "treinador_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);

UsuarioTreino.hasMany(
  Semanas,
  { foreignKey: "usuario_treino_id" },
  { onDelete: "cascade", onUpdate: "cascade" }
);
