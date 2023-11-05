import { Locadora } from '@/models/Locadora';
import axios, { type AxiosResponse } from "axios";

const baseURL = "http://localhost:3333/locadoras";

export const obterLocadoras = async () => {
  try {
    const response = await axios.get(baseURL)
    return extrairLocadoras(response)

  } catch (error) {
    console.error(error)
  }
}

const extrairLocadoras = (response: AxiosResponse) => {
  const data = response.data;

  return data.data.map((item: any) => new Locadora(item));

}