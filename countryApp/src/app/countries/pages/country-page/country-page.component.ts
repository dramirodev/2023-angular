import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
  constructor(private _activatedRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(({id} )=> {

    });
    }

}
