import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit{

  private _debounce: Subject<string> = new Subject<string>()
  @Input()
  public placeholder: string = '';

  @ViewChild('txtSearchInput')
  public txtSearchInput!:  ElementRef<HTMLInputElement>;

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this._debounce
      .pipe(debounceTime(300))
      .subscribe(
      value => {
        this.onDebounce.emit(value);
      }
    )
  }

  handleSearch():void{
    const term = this.txtSearchInput.nativeElement.value;
    this._debounce.next(term);
    this.onValue.emit(term);

  }
}
