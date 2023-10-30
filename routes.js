import { Router } from "express"
import { usuarioCreate, usuarioDelete, usuarioIndex } from "./controllers/usuarioController.js"
import { treinoCreate, treinoIndex } from "./controllers/treinoController.js"
import { tipoCreate, tipoIndex } from "./controllers/tipoController.js"

const router = Router()

router.get('/usuario', usuarioIndex)
      .post('/usuario', usuarioCreate)
      .delete('/usuario/:id', usuarioDelete)

router.get('/treino', treinoIndex)
      .post('/treino', treinoCreate)

router.get('/tipos', tipoIndex)
      .post('/tipos', tipoCreate)

export default router