import { DepartamentoService } from './../../services/departamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-lista',
  templateUrl: './departamento-lista.component.html',
  styleUrls: ['./departamento-lista.component.css']
})
export class DepartamentoListaComponent implements OnInit {
  departamentos: any[] = [];

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit() {
    this.obterDepartamentos();
  }

  obterDepartamentos(){
    this.departamentoService.getDepartamentos().subscribe(
      (data) => {
        this.departamentos = data;
      },
      (error) => {
        console.error('Erro ao obter departamentos', error);
      })
  }

  deletarDepartamento(id: number) {
    this.departamentoService.excluirDepartamento(id).subscribe(
      () => {
        console.log('Departamento excluído com sucesso!');
        this.obterDepartamentos();
      },
      (error) => {
        console.error('Erro ao excluir departamento', error);
      }
    );
  }
}
