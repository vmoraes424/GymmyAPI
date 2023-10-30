import { Router } from "express"
import { usuarioCreate, usuarioDelete, usuarioIndex } from "./controllers/usuarioController.js"
import { treinoCreate, treinoIndex } from "./controllers/treinoController.js"
import { tipoCreate, tipoIndex } from "./controllers/tipoController.js"
import { treinoDescCreate, treinoDescIndex } from "./controllers/treinoDescricaoController.js"
import { usuarioTreinoCreate, usuarioTreinoIndex } from "./controllers/usuarioTreinoController.js"

const router = Router()

router.get('/usuario', usuarioIndex)
      .post('/usuario', usuarioCreate)
      .delete('/usuario/:id', usuarioDelete)

router.get('/treino', treinoIndex)
      .post('/treino', treinoCreate)

router.get('/tipos', tipoIndex)
      .post('/tipos', tipoCreate)

router.get('/treinoDesc', treinoDescIndex)
      .post('/treinoDesc', treinoDescCreate)

router.get('/usuarioTreino', usuarioTreinoIndex)
      .post('/usuarioTreino', usuarioTreinoCreate)

export default router