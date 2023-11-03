const Locadora = require("../models/Locadora");
const { mensagens, statusCode } = require("../utils/enums");
const { CustomResponse, TratarErros } = require("../utils/controllerUtils");

const LocadoraController = {
  async criarLocadora(req, res) {
    const { nome } = req.body;
    try {
      const locadora = await Locadora.create({ nome });
      CustomResponse(
        res,
        statusCode.CREATE,
        true,
        mensagens.locadoraCriada,
        locadora
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async obterTodasLocadoras(req, res) {
    try {
      const locadoras = await Locadora.findAll();

      CustomResponse(
        res,
        statusCode.OK,
        true,
        mensagens.locadorasObtidas,
        locadoras
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },
};

module.exports = LocadoraController;
