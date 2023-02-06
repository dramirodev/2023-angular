import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {enviroments} from "../../../enviroments/enviroments";
import {Hero} from "../interfaces/hero.interface";


@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = enviroments.baseUrl;
  constructor(private _http: HttpClient) {
  }

  getHeroes():Observable<Hero[]>{
    return this._http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }
}
