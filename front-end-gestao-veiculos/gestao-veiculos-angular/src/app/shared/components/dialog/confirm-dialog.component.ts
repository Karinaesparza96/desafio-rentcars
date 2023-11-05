import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    (this.titulo = data.title), (this.conteudo = data.description);
  }
  result: boolean;
  titulo: string;
  conteudo: string;

  confirmar(): void {
    this.result = true;
    this.dialogRef.close(this.result);
  }
  cancelar(): void {
    this.result = false;
    this.dialogRef.close(this.result);
  }
}
