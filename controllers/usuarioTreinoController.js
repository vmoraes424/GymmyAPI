import { Semanas } from "../models/Semanas.js";
import { Usuario } from "../models/Usuario.js";
import { UsuarioTreino } from "../models/UsuarioTreino.js";

export const usuarioTreinoIndex = async (req, res) => {
  try {
    const treinos = await UsuarioTreino.findAll({
      include: [Usuario, Semanas]
    });
    res.status(200).json(treinos);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const usuarioTreinoCreate = async (req, res) => {
  const {
    qntSemanas,
    usuario_id,
    treinador_id,
    treino_id,
  } = req.body;

  if (!qntSemanas || !usuario_id || !treinador_id || !treino_id) {
    res.status(400).json({
      id: 0,
      msg: "Erro... Informe a quantidade de semanas, usuario_id, treinador_id e o treino_id",
    });
    return;
  }

  try {
    const treino = await UsuarioTreino.create({
      qntSemanas,
      usuario_id,
      treinador_id,
      treino_id,
    });
    res.status(201).json(treino);
  } catch (error) {
    res.status(400).send(error);
  }
};
