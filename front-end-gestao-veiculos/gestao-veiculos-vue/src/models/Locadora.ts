export class Locadora {
  id?: string
  nome?: string

  constructor(parameters = null) {
    Object.assign(this, parameters)
  }
}