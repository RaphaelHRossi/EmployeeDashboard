import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Departamento } from '../models/departamento.model'; // Certifique-se de importar o modelo correto

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl = 'https://localhost:7239/api/Departamento';

  constructor(private http: HttpClient) { }

  // Obter Todos os Departamentos
  public getDepartamentos(): Observable<any> {
    console.log('Chamando a API para obter departamentos...');

    return this.http.get<any>(this.apiUrl)
      .pipe(
        tap(data => console.log('Dados recebidos:', data)),
        catchError(error => {
          console.error('Erro na solicitação para a API:', error);
          throw error;
        })
      );
  }

  // Obter Detalhes de um Departamento
  public getDepartamentoById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<any>(url)
      .pipe(
        tap(data => console.log('Dados recebidos: ', data)),
        catchError(this.handleError)
      );
  }

  // Adicionar ou Atualizar um departamento
  public salvarDepartamento(departamento: Departamento): Observable<any> {
    if (departamento.id) {
      // Se o departamento já tem um ID, é uma atualização (PUT)
      const url = `${this.apiUrl}/${departamento.id}`;
      return this.http.put<any>(url, departamento)
        .pipe(
          tap(data => console.log('Departamento atualizado:', data)),
          catchError(this.handleError)
        );
    } else {
      // Se não tem ID, é uma criação (POST)
      return this.http.post<any>(this.apiUrl, departamento)
        .pipe(
          tap(data => console.log('Departamento adicionado:', data)),
          catchError(this.handleError)
        );
    }
  }

  // Excluir um departamento
  public excluirDepartamento(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<any>(url)
      .pipe(
        tap(data => console.log('Departamento excluído:', data)),
        catchError(this.handleError)
      );
  }

  // Função para lidar com erros HTTP
  private handleError(error: any) {
    console.error('Erro na solicitação para a API:', error);
    return throwError(error);
  }
}
