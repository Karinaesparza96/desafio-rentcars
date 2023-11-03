const Veiculo = require("../models/Veiculo");

const { mensagens, statusCode } = require("../utils/enums");
const { CustomResponse, TratarErros } = require("../utils/controllerUtils");
const Locadora = require("../models/Locadora");

const VeiculoController = {
  async criarVeiculo(req, res) {
    try {
      let { id, ...veiculo } = req.body;
      veiculo = await Veiculo.create(veiculo, { silent: true });

      CustomResponse(
        res,
        statusCode.CREATE,
        true,
        mensagens.veiculoCriado,
        veiculo
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async obterTodosVeiculos(req, res) {
    try {
      const veiculos = await Veiculo.findAll({
        include: [
          {
            model: Locadora,
            as: "locadora",
          },
        ],
      });

      CustomResponse(
        res,
        statusCode.OK,
        true,
        mensagens.veiculosObtidos,
        veiculos
      );
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async obterVeiculoPorId(req, res) {
    const { id } = req.params;

    try {
      const veiculo = await Veiculo.findByPk(id);

      if (!veiculo) {
        CustomResponse(res, statusCode.NOTFOUND, sucesso, mensagens.notFound);
      } else {
        CustomResponse(
          res,
          statusCode.OK,
          true,
          mensagens.veiculoObtido,
          veiculo
        );
      }
    } catch (erro) {
      TratarErros(error, res);
    }
  },

  async atualizarVeiculo(req, res) {
    const { id } = req.params;
    try {
      const [linhasAfetadas] = await Veiculo.update(req.body, {
        where: { id },
      });

      if (linhasAfetadas > 0) {
        CustomResponse(res, statusCode.OK, true, mensagens.veiculoAtualizadodo);
      } else {
        CustomResponse(res, statusCode.NOTFOUND, false, mensagens.notFound);
      }
    } catch (error) {
      TratarErros(error, res);
    }
  },

  async deletarVeiculo(req, res) {
    const { id } = req.params;
    try {
      const linhasAfetadas = await Veiculo.destroy({ where: { id } });

      if (linhasAfetadas > 0) {
        CustomResponse(res, statusCode.OK, true, mensagens.veiculoDeletado);
      } else {
        CustomResponse(res, statusCode.NOTFOUND, false, mensagens.notFound);
      }
    } catch (error) {
      TratarErros(error, res);
    }
  },
};

module.exports = VeiculoController;
