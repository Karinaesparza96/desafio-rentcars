import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Veiculo } from 'src/app/veiculos/models/Veiculo';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) { }

  dialogConfig = new MatDialogConfig();

  openDialogConfirm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    dialogConfig.data = {
      title: 'Deseja sair?',
      description: 'Ao sair as mudanças não serão salvas.'
    }
    return this.dialog.open(ConfirmDialogComponent, dialogConfig)
  }

  openDialogConfirmDelete(veiculo: Veiculo) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: 'Tem certeza que deseja excluir este registro?',
      description: `Locadora: ${veiculo.locadora.nome}, Modelo: ${veiculo.modelo}, Marca: ${veiculo.marca}`,
    }
    return this.dialog.open(ConfirmDialogComponent, dialogConfig)
  }
}