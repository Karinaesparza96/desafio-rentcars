const Locadora = require("../models/Locadora");
const { mensagens, statusCode } = require("../utils/enums");
const { CustomResponse, TratarErros } = require("../utils/controllerUtils");

const LocadoraController = {
  async criarLocadora(req, res) {
    let sucesso = false;
    const { nome } = req.body;
    try {
      const locadora = await Locadora.create({ nome });
      sucesso = true;
      CustomResponse(
        res,
        statusCode.CREATE,
        sucesso,
        mensagens.locadoraCriada,
        locadora
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async obterTodasLocadoras(req, res) {
    let sucesso = false;
    try {
      const locadoras = await Locadora.findAll();

      sucesso = true;
      CustomResponse(
        res,
        statusCode.OK,
        sucesso,
        mensagens.locadorasObtidas,
        locadoras
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },
};

module.exports = LocadoraController;
