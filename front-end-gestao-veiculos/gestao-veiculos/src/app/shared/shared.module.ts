import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { MaterialModule } from '../material/material.module';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    SnackBarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SnackBarComponent, MaterialModule]
})
export class SharedModule { }
