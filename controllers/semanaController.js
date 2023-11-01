import { Semanas } from "../models/Semanas.js";

export const semanaIndex = async (req, res) => {
  try {
    const semanas = await Semanas.findAll();
    res.status(200).json(semanas);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const semanaCreate = async (req, res) => {
  const { semana, qntRep, usuario_treino_id } = req.body;

  if (!semana || !qntRep || !usuario_treino_id) {
    res
      .status(400)
      .json({
        id: 0,
        msg: "Erro... Informe a semana, quantidade de repetições e o usuario_treino_id",
      });
    return;
  }

  try {
    const semanas = await Semanas.create({ semana, qntRep, usuario_treino_id });
    res.status(201).json(semanas);
  } catch (error) {
    res.status(400).send(error);
  }
};
