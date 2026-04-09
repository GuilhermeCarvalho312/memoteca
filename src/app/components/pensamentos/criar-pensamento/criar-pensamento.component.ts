import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../services/pensamento-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/validators/lowercase.validator';

/**
 * Componente para o formulário de criação de novos pensamentos.
 * 
 * @author CarvalhoDev
 */
@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(
    private router: Router,
    private pensamentoService: PensamentoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formConstructor();
  }

  /**
   * Monta o formulário reativo acoplando as requisições de validação em cada input.
   */
  formConstructor() {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          lowerCaseValidator,
        ]),
      ],
      modelo: ['modelo1'],
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
  /**
   * Valida o formulário no submit e o envia para ser persistido via API.
   */
  criarPensamento() {
    console.log(this.formulario.status);
    if (this.formulario.valid) {
      this.pensamentoService.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }
}
