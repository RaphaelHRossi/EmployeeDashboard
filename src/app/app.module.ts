import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DepartamentoListaComponent } from './componets/departamento-lista/departamento-lista.component';
import { DepartamentoFormComponent } from './componets/departamento-form/departamento-form.component';
import { DepartamentoDetalhesComponent } from './componets/departamento-detalhes/departamento-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoListaComponent,
    DepartamentoFormComponent,
    DepartamentoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
