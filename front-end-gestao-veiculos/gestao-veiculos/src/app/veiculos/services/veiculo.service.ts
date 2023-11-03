import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, catchError, map, tap } from 'rxjs';

import { BaseService } from './base.service';

import { Veiculo } from '../models/Veiculo';
import { CustomResponse } from 'src/app/veiculos/interfaces/CustomResponse';

@Injectable()
export class VeiculoService extends BaseService {
  private notificarParaAtualizarListaSubject = new Subject<boolean>()
  notificarParaAtualizarLista$ = this.notificarParaAtualizarListaSubject.asObservable();

  constructor(private http: HttpClient) { super() }

  obterPorId(id: string): Observable<Veiculo> {
    return this.http
      .get<CustomResponse<Veiculo>>(`${this.BASE_URL}veiculos/${id}`)
      .pipe(map(this.extrairVeiculo), catchError(super.extrairErros))
  }

  obterTodos(): Observable<Veiculo[]> {
    return this.http
      .get<CustomResponse<Veiculo>>(`${this.BASE_URL}veiculos`)
      .pipe(map(this.extrairVeiculos), catchError(super.extrairErros))
  }

  adicionarVeiculo(veiculo: Veiculo): Observable<CustomResponse<Veiculo>> {
    return this.http
      .post(`${this.BASE_URL}veiculos`, veiculo)
      .pipe(
        map((response: CustomResponse<Veiculo>) => response),
        catchError(super.extrairErros),
        tap(_ => this.notificarParaAtualizarListaSubject.next(true)),
      )
  }

  editarVeiculo(veiculo: Veiculo) {
    return this.http
      .put(`${this.BASE_URL}veiculos/${veiculo.id}`, veiculo)
      .pipe(
        map((response: CustomResponse<Veiculo>) => response),
        tap(_ => this.notificarParaAtualizarListaSubject.next(true)),
        catchError(super.extrairErros),
      )
  }

  excluirVeiculo(id: string) {
    return this.http
      .delete(`${this.BASE_URL}veiculos/${id}`)
      .pipe(catchError(super.extrairErros),
        tap(_ => this.notificarParaAtualizarListaSubject.next(true)),)
  }


  private extrairVeiculos(response: CustomResponse<Veiculo>) {
    const data = response.data
    return data.map((item) => new Veiculo(item))
  }
  private extrairVeiculo(response: CustomResponse<Veiculo>) {
    const data = response.data[0]
    return new Veiculo(data)
  }
}