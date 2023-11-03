import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Locadora } from '../models/Locadora';
import { LocadoraService } from '../services/locadora.service';

@Injectable()
export class LocadorasResolver implements Resolve<Locadora[]> {

  constructor(private locadoraService: LocadoraService) { }

  resolve() {
    return this.locadoraService.obterTodos()
  }
}