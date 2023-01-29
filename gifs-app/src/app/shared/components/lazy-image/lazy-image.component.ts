import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lazy-image',
  template: `
    <div class="d-flex justify-content-center">
      <img [src]="imageUrl" [alt]="alt" class="card-img-top animate__animated animate__fadeIn" (load)="onLoad()"
           [ngStyle]="{display: hasLoader ? '' : 'none'}">
      <img *ngIf="!hasLoader" src="assets/loader.svg" [alt]="alt" class="mt-5" height="35" width="35">
    </div>
  `,
})
export class LazyImageComponent implements OnInit {

  @Input()
  public imageUrl!: string;
  @Input()
  public alt!: string;

  public hasLoader: boolean = false;

  ngOnInit(): void {
    if (!this.imageUrl) {
      throw new Error('imageUrl property is required');
    }
    if (!this.alt) {
      this.alt = 'No title';
    }
  }

  public onLoad() {
    this.hasLoader = true;
  }


}
