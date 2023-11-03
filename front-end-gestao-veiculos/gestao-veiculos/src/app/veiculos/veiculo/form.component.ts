import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, NgForm, Validators, } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { Locadora } from '../models/Locadora';
import { Veiculo } from '../models/Veiculo';

import { FormBaseComponent } from 'src/app/base-components/form-base-component';
import { VeiculoService } from '../services/veiculo.service';
import { CustomResponse } from 'src/app/veiculos/interfaces/CustomResponse';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { mensagensValidacao } from '../validation/mensagens-validacao';
import { LocadoraService } from '../services/locadora.service';
import { Observable } from 'rxjs';
import { NotificarVeiculoService } from '../services/notificarVeiculo.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class VeiculoFormComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  formVeiculo: FormGroup;
  veiculo = new Veiculo();
  locadoras$: Observable<Locadora[]>;

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  @ViewChild('formDirective', { static: true }) formDirective: NgForm;

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculoService,
    private snackBar: MatSnackBar,
    private locadoraService: LocadoraService,
    private veiculoEditService: NotificarVeiculoService
  ) {
    super();
    super.configurarMensagensValidacaoBase(mensagensValidacao);
  }
  ngOnInit(): void {
    this.locadoras$ = this.locadoraService.obterTodos()

    this.formVeiculo = this.fb.group({
      id: [''],
      id_locadora: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}$/)],
      ],
      motor: ['', Validators.required],
      portas: ['', Validators.required],
      cambio: ['', Validators.required],
      ar_condicionado: [false],

    });

    this.veiculoEditService.obterVeiculoParaEdicao().subscribe((veiculo) => {
      this.veiculo = veiculo
      this.formVeiculo.patchValue({ ...this.veiculo });
    })

  }
  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(
      this.formInputElements,
      this.formVeiculo
    );
  }
  onSubmit() {
    if (this.formVeiculo.valid) {
      this.veiculo = { ...this.formVeiculo.value };

      if (this.veiculo.id) {
        this.veiculoService
          .editarVeiculo(this.veiculo)
          .subscribe({
            next: (sucesso) => this.processarSucesso(sucesso),
            error: () => this.processarErro()
          })
      }
      else {
        this.veiculoService
          .adicionarVeiculo(this.veiculo)
          .subscribe({
            next: (sucesso) => this.processarSucesso(sucesso),
            error: () => this.processarErro()
          })
      }
    }
  }

  processarSucesso(res: CustomResponse<Veiculo>) {
    this.resetarFormulario()
    this.openSnackBar(res.messages[0])
  }

  processarErro() {
    this.openSnackBar('Ops! Verifique o formulário ou tente novamente mais tarde')
  }

  openSnackBar(message: string) {
    const config: MatSnackBarConfig = {
      data: message,
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    };
    this.snackBar.openFromComponent(SnackBarComponent, {
      ...config
    });
  }

  resetarFormulario() {
    this.formDirective.resetForm();
  }
}
