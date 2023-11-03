import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { Veiculo } from 'src/app/veiculos/models/Veiculo';

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
      description: `${veiculo.locadora.nome}, ${veiculo.modelo}, ${veiculo.marca}`,
    }
    return this.dialog.open(ConfirmDialogComponent, dialogConfig)
  }
}