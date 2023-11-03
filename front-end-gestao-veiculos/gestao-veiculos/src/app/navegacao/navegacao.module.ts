import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule, MaterialModule, RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavegacaoModule { }
