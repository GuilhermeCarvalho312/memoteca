import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from 'src/app/constants/app-constants';
import { Pensamento } from '../pensamento';

@Injectable({
  providedIn: 'root',
})
/**
 * Serviço responsável por gerenciar as operações de comunicação com a API
 * para a entidade `Pensamento`.
 */
export class PensamentoService {
  private readonly apiUrl = API.url;

  constructor(private http: HttpClient) {}

  /**
   * Lista todos os pensamentos disponíveis na base de dados.
   * 
   * @returns Um Observable emitindo a lista de pensamentos.
   */
  public listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.apiUrl);
  }

  /**
   * Persiste um novo pensamento na base de dados.
   * 
   * @param pensamento Dados do pensamento a ser salvo.
   * @returns Um Observable emitindo o pensamento que foi criado pela API.
   */
  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(API.url, pensamento);
  }

  /**
   * Remove um pensamento permanentemente através do seu identificador.
   * 
   * @param id Identificador único do pensamento a ser removido.
   * @returns Um Observable emitindo a resposta final da exclusão.
   */
  public excluir(id: string | number | null): Observable<Pensamento> {
    const deleteUrl = `${API.url}/${id}`;

    return this.http.delete<Pensamento>(deleteUrl);
  }

  /**
   * Recupera um único pensamento correspondente ao identificador informado.
   * 
   * @param id Identificador único do pensamento desejado.
   * @returns Um Observable emitindo o pensamento encontrado correspondente ao ID.
   */
  public buscarPensamentoPorId(
    id: string | number | null,
  ): Observable<Pensamento> {
    const getUrlId = `${API.url}/${id}`;

    return this.http.get<Pensamento>(getUrlId);
  }
  /**
   * Atualiza os dados de um pensamento existente.
   * 
   * @param pensamento O pensamento contendo os dados atualizados e seu ID.
   * @returns Um Observable emitindo o pensamento que foi atualizado pela API.
   */
  public editar(pensamento: Pensamento): Observable<Pensamento> {
    const editUrl = `${API.url}/${pensamento.id}`;

    return this.http.put<Pensamento>(editUrl, pensamento);
  }
}
