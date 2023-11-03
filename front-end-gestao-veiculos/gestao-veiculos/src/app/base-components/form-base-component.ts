import { DestroyRef, ElementRef, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Observable, fromEvent, merge } from 'rxjs';
import { DisplayMessage } from '../veiculos/interfaces/DisplayMessage';
import { ValidationMessage } from '../veiculos/interfaces/ValidationMessage'
import { GenericValidationForm } from '../veiculos/validation/generic-form-validator';

export abstract class FormBaseComponent {
  destroyRef = inject(DestroyRef);
  displayMessage: DisplayMessage = {};
  genericValidator: GenericValidationForm;
  mensagensValidacao: ValidationMessage;


  protected configurarMensagensValidacaoBase(validationMessages: ValidationMessage) {
    this.genericValidator = new GenericValidationForm(validationMessages);
  }

  protected configurarValidacaoFormularioBase(
    formInputElements: ElementRef[],
    formGroup: FormGroup) {

    let controlBlurs: Observable<any>[] = formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.validarFormulario(formGroup)
    });
  }

  protected validarFormulario(formGroup: FormGroup) {
    this.displayMessage = this.genericValidator.validarMensagensFormulario(formGroup);
  }
}