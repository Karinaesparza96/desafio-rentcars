import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <mat-toolbar class="mat-elevation-z4">
    <mat-nav-list>
      <h1>CRUD de Veículos</h1>
      </mat-nav-list>
    </mat-toolbar>`,
  styles: [
    `
      .mat-toolbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }
    `,
  ],
})
export class NavbarComponent { }
