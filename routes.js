import { Router } from "express"
import { usuarioCreate, usuarioDelete, usuarioIndex } from "./controllers/usuarioController.js"
import { treinoById, treinoCreate, treinoIndex } from "./controllers/treinoController.js"
import { tipoCreate, tipoIndex } from "./controllers/tipoController.js"
import { treinoDescCreate, treinoDescIndex } from "./controllers/treinoDescricaoController.js"
import { usuarioTreinoCreate, usuarioTreinoIndex } from "./controllers/usuarioTreinoController.js"
import { semanaCreate, semanaIndex } from "./controllers/semanaController.js"

const router = Router()

router.get('/usuario', usuarioIndex)
      .post('/usuario', usuarioCreate)
      .delete('/usuario/:id', usuarioDelete)

router.get('/treino', treinoIndex)
      .get('/treino/:id', treinoById)
      .post('/treino', treinoCreate)

router.get('/tipos', tipoIndex)
      .post('/tipos', tipoCreate)

router.get('/treinoDesc', treinoDescIndex)
      .post('/treinoDesc', treinoDescCreate)

router.get('/usuarioTreino', usuarioTreinoIndex)
      .post('/usuarioTreino', usuarioTreinoCreate)

router.get('/semanas', semanaIndex)
      .post('/semanas', semanaCreate)

export default router