import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

interface MyForm {
  name: string;
  price: number;
  inStorage: number;
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: []
})
export class BasicPageComponent implements OnInit {
  // public myFOrm: FormGroup = new FormGroup<any>({
  //   name: new FormControl('',[],[]),
  //   price: new FormControl(0,[],[]),
  //   inStorage: new FormControl(0,[],[]),
  // });
  public myForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min]],
    inStorage: [0, [Validators.required, Validators.min]],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm);
    this.myForm.reset({
      price: [0, [Validators.required, Validators.min]],
      inStorage: [0, [Validators.required, Validators.min]],
    });
  }

  isValidField(field: keyof MyForm): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
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
        case 'minlength':
          return `El campo tiene que tener mínimo ${errors[error].requiredLength}`
        default:
          return null;
      }
    }
    return null;
  }

}
