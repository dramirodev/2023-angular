import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {catchError, map, Observable, of, tap} from "rxjs";
import {CacheStore} from "../interfaces/cache-store.interface";
import {Country} from "../interfaces/country";
import {Regions} from "../interfaces/region.type";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: []
    },
    byCountry: {
      term: '',
      countries: []
    },
    byRegion: {
      region: undefined,
      countries: []
    }
  };

  constructor(private httpClient: HttpClient) {
  }

  private _getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() => of([])),
    );
  }

  searchByCapital(query: string): Observable<Country[]> {
    return this._getCountriesRequest(`${this.url}/capital/${query}`).pipe(
      tap(countries => {
        this.cacheStore.byCapital = {
          term: query,
          countries
        };
      })
    );
  }

  searchByRegion(query: Regions): Observable<Country[]> {
    return this._getCountriesRequest(`${this.url}/region/${query}`).pipe(
      tap(countries => {
        this.cacheStore.byRegion = {
          region: query,
          countries
        };
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    return this._getCountriesRequest(`${this.url}/name/${query}`).pipe(
      tap(countries => {
        this.cacheStore.byCountry = {
          term: query,
          countries
        };
      })
    );
  }

  searchCountryByAlphaCode(query: string): Observable<Country | null> {
    return this._getCountriesRequest(`${this.url}/alpha/${query}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
      );
  }
}
