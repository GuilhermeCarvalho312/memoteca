import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

/**
 * Componente responsável por renderizar o card individual de um pensamento.
 * 
 * @author CarvalhoDev
 */
@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  /**
   * Modifica a classe CSS do card dependendo do tamanho do texto.
   * 
   * @returns A classe de estilo de largura.
   */
  public larguraPensamento(): string {
    if (this.pensamento?.conteudo.length >= 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
