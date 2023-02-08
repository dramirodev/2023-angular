import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  public heroForm = new FormGroup({
    alt_img: new FormControl(''),
    alter_ego: new FormControl('', {
      nonNullable: true,
    }),
    characters: new FormControl(''),
    first_appearance: new FormControl(''),
    id: new FormControl(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    superhero: new FormControl('', {
      nonNullable: true,
    }),
  });

  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' },
  ];

  onSubmit() {
    console.log({
      isValid: this.heroForm.valid,
      value: this.heroForm.value,
    });
  }
}
