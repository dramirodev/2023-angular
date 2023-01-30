import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @ViewChild('txtSearchInput')
  public txtSearchInput!:  ElementRef<HTMLInputElement>;

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  handleSearch():void{
    const term = this.txtSearchInput.nativeElement.value;
    this.onValue.emit(term);
    this.txtSearchInput.nativeElement.value = '';
  }
}
