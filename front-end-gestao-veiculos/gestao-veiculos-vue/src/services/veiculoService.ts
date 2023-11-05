import axios from "axios";

const baseURL = "http://localhost:3333/veiculos";

export const obterVeiculos = async () => {
  try {
    const veiculos = await axios.get(baseURL);
    return veiculos.data.data;

  } catch (erro) {
    console.error(erro);
    throw erro;
  }
};

export const obterVeiculoPorId = async (id: string) => {
  try {
    const veiculos = (await axios.get(baseURL + "/" + id)).data;
    return veiculos.data;

  } catch (erro) {
    handleErrorResponse(erro)
  }
};

export const adicionarVeiculo = async (veiculo: any) => {
  try {
    const novoVeiculo = (await axios.post(baseURL, veiculo)).data;
    return novoVeiculo

  } catch (erro) {
    handleErrorResponse(erro)
  }
}

export const editarVeiculo = async (id: string, veiculo: any) => {
  try {
    const sucesso = await axios.put(baseURL + "/" + id, veiculo);
    return sucesso.data;

  } catch (erro) {
    handleErrorResponse(erro)
  }
}

export const excluirVeiculo = async (id: string) => {
  try {
    const sucesso = (await axios.delete(`${baseURL}/${id}`)).data;
    return sucesso.messages

  } catch (erro) {
    handleErrorResponse(erro)
  }
}

const handleErrorResponse = (error: any) => {

  if (error.response.status == "500") {
    throw ('Erro : ' + error.response.status)
  }
  console.error(error)
}
