import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/country";
import {Regions} from "../../interfaces/region.type";
import {CountriesService} from "../../services/countries.service";


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Regions[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Regions;

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(term: Regions): void {
    this.selectedRegion = term;
    this.countriesService.searchByRegion(term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
