import { Tipo } from "../models/Tipo.js";
import { Treino } from "../models/Treino.js";
import { Usuario } from "../models/Usuario.js";


export const treinoIndex = async (req, res) => {
  try {
    const treinos = await Treino.findAll({
      include: Tipo
    });
    res.status(200).json(treinos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const treinoCreate = async (req, res) => {
  const {nome, tipo_id} = req.body

  if (!nome || !tipo_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe o nome do treino e o tipo" })
    return
  }

  try {
    const treino = await Usuario.create({nome, tipo_id});
    res.status(201).json(treino)
  } catch (error) {
    res.status(400).send(error)
  }
}
