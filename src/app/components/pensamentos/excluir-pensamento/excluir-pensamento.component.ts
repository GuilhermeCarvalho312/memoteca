import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../services/pensamento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

/**
 * Componente dedicado à tela de confirmação e exclusão de um pensamento.
 * 
 * @author CarvalhoDev
 */
@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css'],
})
export class ExcluirPensamentoComponent implements OnInit {
  public pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getPensamentoPorId();
  }

  /**
   * Busca na API o pensamento atual baseando-se no ID presente na URL.
   */
  public getPensamentoPorId(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pensamentoService
      .buscarPensamentoPorId(id)
      .pipe(
        tap((pensamento) => {
          // Renomeie para 'pensamento'
          this.pensamento = pensamento;
        }),
      )
      .subscribe();
  }

  public cancelar() {
    // Implemente a lógica para cancelar aqui, se necessário.
  }

  /**
   * Solicita a deleção do pensamento identificado pela tela atual e redireciona.
   */
  public excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService
        .excluir(this.pensamento.id)
        .subscribe(() => this.router.navigate(['/listarPensamento']));
    }
  }
}
