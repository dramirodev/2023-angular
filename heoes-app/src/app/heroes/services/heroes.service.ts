import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { enviroments } from '../../../enviroments/enviroments';
import { Hero } from '../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = enviroments.baseUrl;

  constructor(private _http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this._http
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError(() => of(undefined)));
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this._http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }
}
