const mensagens = {
  locadoraCriada: "Locadora criada com sucesso",
  locadorasObtidas: "Locadoras obtidas com sucesso",

  veiculoCriado: "Veículo criado com sucesso!",
  veiculoDeletado: "Veículo deletado com sucesso!",
  veiculoAtualizadodo: "Veículo atualizado com sucesso!",
  veiculosObtidos: "Veículos recuperados com sucesso!",
  veiculoObtido: "Veículo recuperado com sucesso!",

  erroGenerico: "Ocorreu um erro, tente novamente mais tarde",
  notFound: "Veículo não encontrado",
  notFoundLocadora: "Locadora não encontrada",
};

const statusCode = {
  OK: 200,
  CREATE: 201,
  NOCONTENT: 204,
  BADREQUEST: 400,
  INTERNALERROR: 500,
  NOTFOUND: 404,
};

module.exports = { mensagens, statusCode };
