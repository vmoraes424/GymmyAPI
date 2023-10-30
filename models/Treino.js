import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { TreinoDescricao } from './TreinoDescricao.js';
import { Tipo } from './Tipo.js';
import { UsuarioTreino } from './UsuarioTreino.js';

export const Treino = sequelize.define('treino', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});

Treino.belongsTo(Tipo, {foreignKey: {
  name: 'tipo_id'
}})

Treino.hasMany(Tipo, {
  foreignKey: {
    name: 'tipo_id',
  }
})

