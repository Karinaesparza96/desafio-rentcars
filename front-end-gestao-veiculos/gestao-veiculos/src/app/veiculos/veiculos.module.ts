import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { LocadoraService } from './services/locadora.service';
import { VeiculoService } from './services/veiculo.service';

import { VeiculoFormComponent } from './veiculo/form.component';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';
import { VeiculosComponent } from './veiculos.component';


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

  providers: [VeiculoService, LocadoraService]
})
export class VeiculosModule { }
