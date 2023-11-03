import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { VeiculosDataSource } from './veiculo-data-source';
import { VeiculoService } from '../services/veiculo.service';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { CustomResponse } from 'src/app/veiculos/interfaces/CustomResponse';
import { filter, switchMap } from 'rxjs';
import { Veiculo } from '../models/Veiculo';
import { NotificarVeiculoService } from '../services/notificarVeiculo.service';

@Component({
  selector: 'app-lista-veiculo',
  templateUrl: './lista-veiculo.component.html',
  styleUrls: ['./lista-veiculo.component.css'],
})
export class ListaVeiculoComponent implements OnInit {
  dataSource: VeiculosDataSource;
  displayColumns = [
    'locadora',
    'modelo',
    'marca',
    'motor',
    'ano',
    'portas',
    'cambio',
    'arCondicionado',
    'dataCricao',
    'dataAtualizacao',
    'acoes',
  ];

  constructor(
    private veiculosService: VeiculoService,
    private dialogService: DialogService,
    private snackBar: MatSnackBar,
    private veiculoEditService: NotificarVeiculoService
  ) { }

  ngOnInit(): void {
    this.veiculosService
      .notificarParaAtualizarLista$
      .subscribe(() => this.atualizarLista())

    this.dataSource = new VeiculosDataSource(this.veiculosService);

    this.atualizarLista()

  }

  openSnackBar(message: string) {
    const config: MatSnackBarConfig = {
      data: message,
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    };
    this.snackBar.openFromComponent(SnackBarComponent, {
      ...config
    });
  }

  deletar(veiculo) {
    this.confirmarExclusao(veiculo);
  }

  editar(veiculo) {
    this.veiculoEditService.emitirVeiculoParaEdicao(veiculo)
  }

  atualizarLista() {
    this.dataSource.carregarVeiculos();
  }

  private confirmarExclusao(veiculo): void {
    this.dialogService
      .openDialogConfirmDelete(veiculo)
      .afterClosed()
      .pipe(
        filter((confirm: boolean) => confirm === true),
        switchMap(() => this.veiculosService.excluirVeiculo(veiculo.id))
      )
      .subscribe((res: CustomResponse<Veiculo>) => {
        this.dataSource.carregarVeiculos();
        this.openSnackBar(res.messages[0]);
      });
  }
}
