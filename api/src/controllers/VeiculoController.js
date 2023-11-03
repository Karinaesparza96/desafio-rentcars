const Veiculo = require("../models/Veiculo");

const { mensagens, statusCode } = require("../utils/enums");
const { CustomResponse, TratarErros } = require("../utils/controllerUtils");
const Locadora = require("../models/Locadora");

const VeiculoController = {
  async criarVeiculo(req, res) {
    let sucesso = false;

    try {
      let { id, ...veiculo } = req.body;
      veiculo = await Veiculo.create(veiculo, { silent: true });
      sucesso = true;

      CustomResponse(
        res,
        statusCode.CREATE,
        sucesso,
        mensagens.veiculoCriado,
        veiculo
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async obterTodosVeiculos(req, res) {
    let sucesso = false;

    try {
      const veiculos = await Veiculo.findAll({
        include: [
          {
            model: Locadora,
            as: "locadora",
          },
        ],
      });

      sucesso = true;
      CustomResponse(
        res,
        statusCode.OK,
        sucesso,
        mensagens.veiculosObtidos,
        veiculos
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async obterVeiculoPorId(req, res) {
    let sucesso = false;
    const { id } = req.params;

    try {
      const veiculo = await Veiculo.findByPk(id);

      if (!veiculo) {
        CustomResponse(res, statusCode.NOTFOUND, sucesso, mensagens.notFound);
      } else {
        sucesso = true;
        CustomResponse(
          res,
          statusCode.OK,
          sucesso,
          mensagens.veiculoObtido,
          veiculo
        );
      }
    } catch (erro) {
      TratarErros(error, res);
    }
  },

  async atualizarVeiculo(req, res) {
    let sucesso = false;
    const { id } = req.params;
    try {
      const [linhasAfetadas] = await Veiculo.update(req.body, {
        where: { id },
      });

      if (linhasAfetadas > 0) {
        sucesso = true;
        CustomResponse(
          res,
          statusCode.OK,
          sucesso,
          mensagens.veiculoAtualizadodo
        );
      } else {
        CustomResponse(res, statusCode.NOTFOUND, sucesso, mensagens.notFound);
      }
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async deletarVeiculo(req, res) {
    const { id } = req.params;
    let sucesso = false;
    try {
      const linhasAfetadas = await Veiculo.destroy({ where: { id } });

      if (linhasAfetadas > 0) {
        sucesso = true;
        CustomResponse(res, statusCode.OK, sucesso, mensagens.veiculoDeletado);
      } else {
        CustomResponse(res, statusCode.NOTFOUND, sucesso, mensagens.notFound);
      }
    } catch (error) {
      TratarErros(error, res);
    }
  },
};

module.exports = VeiculoController;
