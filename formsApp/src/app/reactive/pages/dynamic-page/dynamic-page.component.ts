import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: []
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Te reviento', Validators.required],
      ['Tu puta madre', Validators.required],
    ])
  });
  public newFavourite: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) {
  }

  get favoriteGames() {
    return this.myForm.controls['favoriteGames'] as FormArray;
  }

  onDeleteFavourite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  addToFavourite(): void {
    if (this.newFavourite.invalid) {
      return;
    }

    this.favoriteGames.push(this.fb.control(this.newFavourite.value, Validators.required));
    this.newFavourite.reset();
  }

  obSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
