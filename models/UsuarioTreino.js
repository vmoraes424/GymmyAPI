import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Usuario } from './Usuario.js';
import { TreinoDescricao } from './TreinoDescricao.js';

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
});


UsuarioTreino.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Usuario.hasMany(UsuarioTreino, { foreignKey: 'usuario_id' });

UsuarioTreino.belongsTo(TreinoDescricao, { foreignKey: 'treino_id' });
TreinoDescricao.hasMany(UsuarioTreino, { foreignKey: 'treino_id' });
UsuarioTreino.belongsTo(TreinoDescricao, { foreignKey: 'treinador_id' });
TreinoDescricao.hasMany(UsuarioTreino, { foreignKey: 'treinador_id' });