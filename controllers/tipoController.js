import { Tipo } from "../models/Tipo.js";

export const tipoIndex = async (req, res) => {
  try {
    const tipo = await Tipo.findAll();
    res.status(200).json(tipo);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const tipoCreate = async (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    res.status(400).json({ id: 0, msg: "Erro... Informe o tipo da ficha" });
    return;
  }

  try {
    const tipo = await Tipo.create({ nome });
    res.status(201).json(tipo);
  } catch (error) {
    res.status(400).send(error);
  }
};
