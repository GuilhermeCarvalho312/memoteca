import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/validators/lowercase.validator';
import { PensamentoService } from '../services/pensamento-service.service';

/**
 * Componente responsável pelo preenchimento e edição de um pensamento existente.
 * 
 * @author CarvalhoDev
 */
@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pensamentoService: PensamentoService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formConstructor();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pensamentoService.buscarPensamentoPorId(id).subscribe((pensamento) => {
        this.formulario.patchValue({
          id: pensamento.id,
          conteudo: pensamento.conteudo,
          autoria: pensamento.autoria,
          modelo: pensamento.modelo,
        });
      });
    }
  }

  /**
   * Monta o formulário vazio, definindo atributos e tipagens de validadores para os inputs.
   */
  formConstructor() {
    this.formulario = this.formBuilder.group({
      id: [''],
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
   * Verifica o status do formulário, envia as edições via PUT e redireciona ao mural da Home.
   */
  editarPensamento() {
    if (this.formulario.valid) {
      this.pensamentoService.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }
}
