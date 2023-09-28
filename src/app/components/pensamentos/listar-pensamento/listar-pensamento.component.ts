import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-constants';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  public listaPensamentos: Array<Pensamento> = [];

  constructor() {}

  ngOnInit(): void {}
}
