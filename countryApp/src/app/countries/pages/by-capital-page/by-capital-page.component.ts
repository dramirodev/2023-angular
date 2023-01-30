import {Component} from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {
  }

  searchByCapital(term: string) {
    this.countriesService.searchByCapital(term).subscribe(countries => {
      this.countries = countries;
    });
  }

}
