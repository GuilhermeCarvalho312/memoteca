import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  public pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
  criarPensamento() {
    throw new Error('Method not implemented.');
  }
}
