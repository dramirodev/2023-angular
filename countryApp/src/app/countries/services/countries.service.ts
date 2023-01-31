import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {catchError, delay, map, Observable, of} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) {
  }

  private _getCountriesRequest(url: string):Observable<Country[]>{
  return this.httpClient.get<Country[]>(url).pipe(
    catchError(() => of([])),
    delay(2000)
  );
  }

  searchByCapital(query: string): Observable<Country[]> {
    return this._getCountriesRequest(`${this.url}/capital/${query}`);
  }

  searchByRegion(query: string): Observable<Country[]> {
    return this._getCountriesRequest(`${this.url}/region/${query}`);
  }

  searchByCountry(query: string): Observable<Country[]> {
    return this._getCountriesRequest(`${this.url}/name/${query}`);
  }

  searchCountryByAlphaCode(query: string): Observable<Country | null> {
    return this._getCountriesRequest(`${this.url}/alpha/${query}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
      );
  }
}
