import express from 'express'

import { sequelize } from './database/conecta.js'
import router from './routes.js'
import { Treino } from './models/Treino.js'
import { Tipo } from './models/Tipo.js'
import { TreinoDescricao } from './models/TreinoDescricao.js'
import { Usuario } from './models/Usuario.js'
import { UsuarioTreino } from './models/UsuarioTreino.js'

const app = express()
const port = 3001

app.use(express.json())
app.use(router)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await Treino.sync({force: true})
    await Tipo.sync({force: true})
    await TreinoDescricao.sync({force: true})
    await Usuario.sync({force: true})
    await UsuarioTreino.sync({force: true})
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