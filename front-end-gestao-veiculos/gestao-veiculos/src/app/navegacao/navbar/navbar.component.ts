import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    mat-nav-list  a span{
    text-decoration: none;
    color: black;
    transition: color 0.3s;
}
  `]
})
export class NavbarComponent {

}
