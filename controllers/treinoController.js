import { TreinoTipo } from "../models/TreinoTipo.js";
import { Treino } from "../models/Treino.js";
import { TreinoDescricao } from "../models/TreinoDescricao.js";
import { Sequelize } from "sequelize";


export const treinoIndex = async (req, res) => {
  try {
    const treinos = await Treino.findAll({
      include: [TreinoTipo, TreinoDescricao],
      order: [['createdAt', 'DESC']]
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
    const treino = await Treino.create({nome, tipo_id});
    res.status(201).json(treino)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const treinoById = async (req, res) => {
  const id = req.params.id

  try {
    const treino = await Treino.findByPk(id, {
      include: [TreinoTipo, TreinoDescricao]
    });
    res.status(200).json(treino)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const treinoDelete = async (req, res) => {
  const id = req.params.id

  try {
    await Treino.destroy({ where: { id } })
    res.status(200).json({ id: 0, msg: "Treino excluido com sucesso!" })
  } catch (error) {
    res.status(400).send(error)
  }
}
