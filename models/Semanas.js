import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';

export const Semanas = sequelize.define('semana', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  semana: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  qntRep: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
}, {
  timestamps: false
});