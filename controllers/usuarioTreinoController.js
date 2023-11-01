import { Semanas } from "../models/Semanas.js";
import { UsuarioTreino } from "../models/UsuarioTreino.js";

export const usuarioTreinoIndex = async (req, res) => {
  try {
    const treinos = await UsuarioTreino.findAll({
      include: [Semanas]
    });
    res.status(200).json(treinos);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const usuarioTreinoCreate = async (req, res) => {
  const {
    semanas,
    qntRep,
    qntDiasPorSemana,
    usuario_id,
    treinador_id,
    treino_id,
  } = req.body;

  if (!semanas || !qntRep || !qntDiasPorSemana || !usuario_id || !treinador_id || !treino_id) {
    res.status(400).json({
      id: 0,
      msg: "Erro... Informe as semanas, quantidade de repetições, a quantidade de dias, usuario_id, treinador_id e o treino_id",
    });
    return;
  }

  try {
    const treino = await UsuarioTreino.create({
      semanas,
      qntRep,
      qntDiasPorSemana,
      usuario_id,
      treinador_id,
      treino_id,
    });
    res.status(201).json(treino);
  } catch (error) {
    res.status(400).send(error);
  }
};
