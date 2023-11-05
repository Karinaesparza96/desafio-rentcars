import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidationMessage } from '../interfaces/ValidationMessage';
import { DisplayMessage } from '../interfaces/DisplayMessage';

export class GenericValidationForm {
  constructor(private validationMessage: ValidationMessage) { }

  validarMensagensFormulario(form: FormGroup): DisplayMessage {
    return Object.keys(form.controls).reduce((result: any, key: string) => {
      const control = form.get(key);

      if (control instanceof FormGroup) {
        return { ...result, ...this.validarMensagensFormulario(control) };
      } else {
        result[key] = '';

        if (this.validationMessage[key] && this.controlPrecisaDeValidacao(control)) {
          result[key] = this.obterValidacaoMensagem(control, key);
        }
      }

      return result;
    }, {});
  }

  controlPrecisaDeValidacao(control: AbstractControl): boolean {
    return control.dirty || control.touched;
  }

  obterValidacaoMensagem(control: AbstractControl, key: string): string {
    const errors = control.errors;

    if (errors) {
      const errorKeys = Object.keys(errors);

      for (const errorKey of errorKeys) {
        if (this.validationMessage[key][errorKey]) {
          return this.validationMessage[key][errorKey];
        }
      }
    }

    return '';
  }
}