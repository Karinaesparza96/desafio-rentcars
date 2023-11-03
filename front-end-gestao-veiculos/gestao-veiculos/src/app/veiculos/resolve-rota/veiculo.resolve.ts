import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { VeiculoService } from '../services/veiculo.service';
import { Veiculo } from '../models/Veiculo';


@Injectable()
export class VeiculoResolver implements Resolve<Veiculo> {

  constructor(private veiculoService: VeiculoService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const veiculoId = route.paramMap.get('id');
    return this.veiculoService.obterPorId(veiculoId);
  }
}

