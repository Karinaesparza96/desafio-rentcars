import { ValidationMessage } from '../interfaces/ValidationMessage';

export const mensagensValidacao: ValidationMessage = {
  id_locadora: {
    required: 'Informe o campo locadora',
  },
  modelo: {
    required: 'Informe o modelo',
  },
  marca: {
    required: 'Informe o marca',
  },
  ano: {
    required: 'Informe o ano',
    pattern: 'O ano precisa ter 4 caracteres númericos',
  },
  motor: {
    required: 'Informe o motor',
  },
  cambio: {
    required: 'Informe o câmbio',
  },
  portas: {
    required: 'Informe a quantidade de portas',
  }
};