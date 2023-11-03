import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <mat-toolbar><span>Desenvolvido com Angular</span> </mat-toolbar>
    </footer>
  `,
  styles: [
    `
      .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        color: #fff;
      }
      .footer span {
        margin: 0 auto;
      }
    `,
  ],
})
export class FooterComponent { }
