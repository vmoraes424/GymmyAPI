import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Treino } from './Treino.js';

export const TreinoDescricao = sequelize.define('treino_descricao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  treino_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true
  }
});