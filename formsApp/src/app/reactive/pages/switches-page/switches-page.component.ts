import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

interface MyForm {
  gender: string;
  wantNotifications: boolean;
  termsAndConditions: boolean;
}

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {
  public myForm = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });
  constructor(private fb: FormBuilder) {
  }

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
  }

  getFieldError(field: keyof MyForm): string | null {
    if (!this.myForm.controls[field]) {
      return null;
    }

    const errors = this.myForm.controls[field].errors || {};

    for (const error of Object.keys(errors)) {
      switch (error) {
        case 'required':
          return 'Este campo es requerido';
        case 'requiredTrue':
          return `Debe aceptar las condiciones de acceso`
        default:
          return null;
      }
    }
    return null;
  }
}
