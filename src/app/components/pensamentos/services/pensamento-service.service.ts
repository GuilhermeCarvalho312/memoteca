import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from 'src/app/constants/app-constants';
import { Pensamento } from '../pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly apiUrl = API.url;

  constructor(private http: HttpClient) {}

  public listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.apiUrl);
  }

  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(API.url, pensamento);
  }

  public excluir(id: string | number | null): Observable<Pensamento> {
    const deleteUrl = `${API.url}/${id}`;

    return this.http.delete<Pensamento>(deleteUrl);
  }

  public buscarPensamentoPorId(
    id: string | number | null,
  ): Observable<Pensamento> {
    const getUrlId = `${API.url}/${id}`;

    return this.http.get<Pensamento>(getUrlId);
  }
}
