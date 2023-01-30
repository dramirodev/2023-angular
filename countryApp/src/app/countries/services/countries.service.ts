import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, of, catchError} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string= "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) { }

  searchByCapital(query: string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/capital/${query}`).pipe(
      catchError(() => of([]))
    );
  }

  searchByRegion(query: string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/region/${query}`).pipe(
      catchError(() => of([]))
    );
  }

  searchByCountry(query: string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/name/${query}`).pipe(
      catchError(() => of([]))
    );
  }
}
