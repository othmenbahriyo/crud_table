import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactureComponent } from './facture/facture.component';


const routes: Routes = [
  { path: 'f', component: FactureComponent },
  {path: '', redirectTo: 'f', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
