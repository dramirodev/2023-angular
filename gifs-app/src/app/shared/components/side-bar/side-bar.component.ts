import {Component} from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {


  constructor(private _gifsService: GifsService) {

  }

  get tagsHistory(): string[] {
    return this._gifsService.tagHistory;
  }

  public searchGif(tag: string): void {
    this._gifsService.searchTag(tag);
  }

}
