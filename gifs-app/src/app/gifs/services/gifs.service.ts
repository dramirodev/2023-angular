import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Gif, SearchResponse} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];

  private _apiKey: string = "VJkKCKo8iKhTRygeyuzCka7PXeUZExS5";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";
  private _tagHistory: string[] = [];

  constructor(private _http: HttpClient) {
    this._loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagHistory];
  }

  searchTag(tag: string) {
    if (!tag.trim().length) {
      return;
    }
    this._organizeHistory(tag);

    const params = new HttpParams().set('api_key', this._apiKey).set('q', tag).set('limit', '10');

    this._http.get<SearchResponse>(`${this.serviceUrl}/search`, {params}).subscribe(value => {
      this.gifList = value.data;
    });

  }

  private saveLocalStorage(): void {
    localStorage.setItem('tag_history', JSON.stringify(this._tagHistory));
  }

  private _loadLocalStorage(): void {
    const dataStorage = localStorage.getItem('tag_history');

    if (!!dataStorage) {
      this._tagHistory = JSON.parse(dataStorage);
    }
  }

  private _organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(t => t !== tag);
    }


    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

}
