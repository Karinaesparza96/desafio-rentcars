import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, map } from 'rxjs';

import { CustomResponse } from 'src/app/veiculos/interfaces/CustomResponse';
import { Locadora } from '../models/Locadora';


@Injectable()
export class LocadoraService extends BaseService {

  constructor(private http: HttpClient) { super() }

  obterTodos(): Observable<Locadora[]> {
    return this.http
      .get<CustomResponse<Locadora>>(`${this.BASE_URL}locadoras`)
      .pipe(map(this.extrairLocadoras), catchError(super.extrairErros))
  }

  private extrairLocadoras(res: CustomResponse<Locadora>) {
    const data = res.data
    return data.map(item => new Locadora(item))
  }

}