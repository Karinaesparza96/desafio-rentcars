import { DataSource } from '@angular/cdk/collections';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { Veiculo } from '../models/Veiculo';
import { VeiculoService } from '../services/veiculo.service';

export class VeiculosDataSource implements DataSource<Veiculo> {
  private veiculosSubject = new BehaviorSubject<Veiculo[]>([]);

  constructor(private veiculoService: VeiculoService) { }

  connect(): Observable<Veiculo[]> {
    return this.veiculosSubject.asObservable();
  }

  disconnect(): void {
    this.veiculosSubject.complete();
  }

  carregarVeiculos() {
    this.veiculoService
      .obterTodos()
      .subscribe((veiculos) => this.veiculosSubject.next(veiculos));
  }

}
