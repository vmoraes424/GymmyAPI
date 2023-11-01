import { Usuario } from "../models/Usuario.js";
import { UsuarioTreino } from "../models/UsuarioTreino.js";


export const usuarioIndex = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [UsuarioTreino]
    });
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const usuarioCreate = async (req, res) => {
  const {nome, email, senha, professor} = req.body

  if (!nome || !email || !senha) {
    res.status(400).json({ id: 0, msg: "Erro... Informe todos os dados" })
    return
  }

  try {
    const usuario = await Usuario.create({nome, email, senha, professor});
    res.status(201).json(usuario)
  } catch (error) {
    res.status(400).send(error)
  }
}
export const usuarioDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.destroy({ where: { id: id } });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).send(error);
  }
}
