import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoFormComponent } from './componets/departamento-form/departamento-form.component';
import { DepartamentoListaComponent } from './componets/departamento-lista/departamento-lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/departamentos/lista', pathMatch: 'full' },
  { path: 'departamentos/lista', component: DepartamentoListaComponent },
  { path: 'departamentos/novo', component: DepartamentoFormComponent },
  { path: 'departamentos/editar/:id', component: DepartamentoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
