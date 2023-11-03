import { Locadora } from './Locadora';

export class Veiculo {
  id: string;
  modelo: string;
  marca: string;
  ano: number;
  motor: string;
  portas: number;
  cambio: string;
  ar_condicionado: boolean;
  createdAt: Date;
  updatedAt?: Date;
  id_locadora: string;
  locadora: Locadora;

  constructor(props = null) {
    if (props) {
      Object.assign(this, props);
    }
  }
}