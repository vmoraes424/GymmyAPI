import express from 'express'
import cors from 'cors';
import router from './routes.js'

import { sequelize } from './database/conecta.js'
import { Treino } from './models/Treino.js'
import { TreinoTipo } from './models/TreinoTipo.js'
import { TreinoDescricao } from './models/TreinoDescricao.js'
import { Usuario } from './models/Usuario.js'
import { UsuarioTreino } from './models/UsuarioTreino.js'
import { Semanas } from './models/Semanas.js'

const app = express()
const port = 3001

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3001/',
}))
app.use(router)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await TreinoTipo.sync({alter: true})
    await Treino.sync({alter: true})
    await Usuario.sync({alter: true})
    await TreinoDescricao.sync({alter: true})
    await UsuarioTreino.sync({alter: true})
    await Semanas.sync({alter: true})
    console.log("Ok! Tabelas sincronizadas com sucesso")
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API Gymmy')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})