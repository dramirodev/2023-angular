import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, Subject, Subscription} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private _debounce: Subject<string> = new Subject<string>();
  private _debounceSubscription?: Subscription;
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @ViewChild('txtSearchInput')
  public txtSearchInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this._debounceSubscription = this._debounce
      .pipe(debounceTime(300))
      .subscribe(
        value => {
          this.onDebounce.emit(value);
        }
      );
  }

  ngOnDestroy(): void {
    this._debounceSubscription?.unsubscribe();
  }

  handleSearch(): void {
    const term = this.txtSearchInput.nativeElement.value;
    this._debounce.next(term);
  }
}
