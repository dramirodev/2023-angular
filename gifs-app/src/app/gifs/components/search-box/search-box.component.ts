import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component(
  {
    selector: 'gifs-search-box',
    template: `
      <h5>Buscar:</h5>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput
      >
    `,
  },
)
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {
    const tag = this._gifsService.tagHistory[0];
    this._gifsService.searchTag(tag);
  }


  searchTag() {
    const tag = this.tagInput.nativeElement.value.trim();
    this._gifsService.searchTag(tag);
    this.tagInput.nativeElement.value = '';
  }
}

