import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../services/pensamento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPensamentoPorId();
  }

  public getPensamentoPorId(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pensamentoService
      .buscarPensamentoPorId(id)
      .pipe(
        tap((pensamento) => {
          // Renomeie para 'pensamento'
          this.pensamento = pensamento;
        })
      )
      .subscribe();
  }

  public cancelar() {
    // Implemente a lógica para cancelar aqui, se necessário.
  }

  public excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService
        .excluir(this.pensamento.id)
        .subscribe(() => this.router.navigate(['/listarPensamento']));
    }
  }
}
