import { TreinoDescricao } from "../models/TreinoDescricao.js";

export const treinoDescIndex = async (req, res) => {
  try {
    const treinos = await TreinoDescricao.findAll();
    res.status(200).json(treinos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const treinoDescCreate = async (req, res) => {
  const {titulo, descricao, treino_id} = req.body

  if (!titulo || !descricao || !treino_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe o titulo do treino e a descrição e o treino_id" })
    return
  }

  try {
    const treino = await TreinoDescricao.create({titulo, descricao, treino_id});
    res.status(201).json(treino)
  } catch (error) {
    res.status(400).send(error)
  }
}
