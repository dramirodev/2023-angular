import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {delay, switchMap} from "rxjs";
import {Hero} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: []
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private _http: HeroesService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this._activateRoute.params.pipe(
      delay(3000),
      switchMap(({id}) => this._http.getHeroById(id))
    ).subscribe(
      hero => {
        if (!hero) {
          this._router.navigate(['/heroes/list']);
        }
        this.hero = hero;
      }
    );
  }

  goBack(){
    this._router.navigateByUrl('/heroes/list')
  }

}
