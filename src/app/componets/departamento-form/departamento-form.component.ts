import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from './../../services/departamento.service';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit {
  departamento: any = {}; // Objeto que conterá os dados do departamento
  editando = false; // Flag para verificar se estamos editando um departamento existente

  constructor(
    private departamentoService: DepartamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Verifica se estamos editando um departamento existente
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        // Se o ID estiver presente, estamos editando
        this.editando = true;
        // Chame a função para obter os detalhes do departamento pelo ID
        this.obterDetalhesDepartamento(id);
      }
    });
  }

  obterDetalhesDepartamento(id: number) {
    this.departamentoService.getDepartamentoById(id)
      .subscribe(data => {
        this.departamento = data;
      });
  }

  salvarDepartamento() {
    if (this.editando) {
      // Se estamos editando, chame a função para atualizar o departamento
      this.departamentoService.salvarDepartamento(this.departamento)
        .subscribe(() => {
          // Operação bem-sucedida, redirecione ou faça algo
          this.router.navigate(['/departamentos/lista']);
        });
    } else {
      // Se não estamos editando, chame a função para criar um novo departamento
      this.departamentoService.salvarDepartamento(this.departamento)
        .subscribe(() => {
          // Operação bem-sucedida, redirecione ou faça algo
          this.router.navigate(['/departamentos/lista']);
        });
    }
  }
}
