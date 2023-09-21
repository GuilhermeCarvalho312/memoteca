import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-constants';
import { Pensamento } from 'src/app/models/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  public listaPensamentos: Array<Pensamento> = [
    {
      conteudo: 'I love angular - 2',
      autoria: 'Guilherme - 2',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Teste de Iteração',
      autoria: 'Edward',
      modelo: AppConstants.MODELOS.MODELO_01,
    },
    {
      conteudo:
        'A inovação tecnológica transforma constantemente nosso mundo, conectando pessoas, ampliando horizontes e promovendo soluções. Essa evolução é impulsionada por mentes criativas e determinadas, ansiosas para superar desafios. Avanços em IA, saúde e energia estão moldando nosso futuro.',
      autoria: 'Newgate',
      modelo: AppConstants.MODELOS.MODELO_02,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
