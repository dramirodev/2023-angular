import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{
  public country: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    this.country = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string) {
    this.countriesService.searchByCountry(term).subscribe(country => {
      this.country = country;
    });
  }
}
