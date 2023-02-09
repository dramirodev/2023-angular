import {Injectable} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from "@angular/forms";


@Injectable({providedIn: 'root'})
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  cantBeStrider = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }

    return null;
  };

  isValidField(form: FormGroup, field: string): boolean{
    return !!(form.controls[field].errors && form.controls[field].touched);
  }

  isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo:string){
    return (formGroup: AbstractControl): ValidationErrors | null => {

      function returnError(field: string){
        formGroup.get(field)?.setErrors({fieldAreNotEqual: true});
        return {fieldAsEqual: true}
      }

      return (formGroup.get(fieldOne)?.value !== formGroup.get(fieldTwo)?.value) ? returnError(fieldTwo) : null;
    }
  }



}


