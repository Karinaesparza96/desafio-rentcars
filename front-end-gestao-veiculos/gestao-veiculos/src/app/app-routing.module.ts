import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/veiculos', pathMatch: 'full'
  },
  {
    path: 'veiculos', component: VeiculosComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
