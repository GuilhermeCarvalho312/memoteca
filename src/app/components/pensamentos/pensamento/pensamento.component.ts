import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/models/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public larguraPensamento(): string {
    if (this.pensamento?.conteudo.length >= 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
