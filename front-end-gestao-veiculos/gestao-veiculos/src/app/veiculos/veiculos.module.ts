import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { VeiculoFormComponent } from './veiculo/form.component';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';
import { VeiculosComponent } from './veiculos.component';

import { VeiculoService } from './services/veiculo.service';
import { SharedModule } from '../shared/shared.module';

import { LocadoraService } from './services/locadora.service';
import { VeiculoResolver } from './resolve-rota/veiculo.resolve';
import { LocadorasResolver } from './resolve-rota/locadora.resolve';



@NgModule({
  declarations: [
    VeiculoFormComponent,
    ListaVeiculoComponent,
    VeiculosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],

  providers: [VeiculoService, LocadoraService, VeiculoResolver, LocadorasResolver]
})
export class VeiculosModule { }
