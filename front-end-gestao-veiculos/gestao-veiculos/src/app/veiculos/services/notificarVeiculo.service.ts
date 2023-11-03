import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Veiculo } from '../models/Veiculo';

@Injectable({
  providedIn: 'root',
})
export class NotificarVeiculoService {
  private veiculoSubject = new Subject<Veiculo>();

  emitirVeiculoParaEdicao(veiculo: Veiculo) {
    this.veiculoSubject.next(veiculo);
  }

  obterVeiculoParaEdicao() {
    return this.veiculoSubject.asObservable();
  }
}