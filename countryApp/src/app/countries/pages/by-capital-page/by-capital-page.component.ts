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
  public isLoading: boolean = false;
  constructor(private countriesService: CountriesService) {
  }

  searchByCapital(term: string) {
    this.isLoading = true;
    this.countriesService.searchByCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

}
