import type { Locadora } from './Locadora'

export class Veiculo {
  id?: string
  modelo?: string
  marca?: string
  ano?: number
  motor?: string
  portas?: number
  cambio?: string
  arcondicionado?: boolean
  createdAt?: Date
  updatedAt?: Date
  locadora?: Locadora

  constructor(parameters = null) {
    Object.assign(this, parameters)
  }
}

