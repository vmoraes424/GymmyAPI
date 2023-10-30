import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Usuario } from './Usuario.js';
import { Treino } from './Treino.js';

export const UsuarioTreino = sequelize.define('usuario_treino', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  semanas: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  qntRep: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  qntDiasPorSemana: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dataVinculo: {
    type: DataTypes.DATE,
    allowNull: false
  },
});

