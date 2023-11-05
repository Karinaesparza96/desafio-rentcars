import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styles: [
    `
    :host {
      display: flex;
  
    }

    .label{
    font-size: 16px;
    }
  `,
  ],
})
export class SnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
  data: string = inject(MAT_SNACK_BAR_DATA)

}
