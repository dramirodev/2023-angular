import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    alt_img: new FormControl(''),
    alter_ego: new FormControl('', {
      nonNullable: true,
    }),
    characters: new FormControl(''),
    first_appearance: new FormControl(''),
    id: new FormControl(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    superhero: new FormControl('', {
      nonNullable: true,
    }),
  });

  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' },
  ];

  constructor(
    private _heroService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private _dialog: MatDialog
  ) {}

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  onSubmit() {
    if (this.heroForm.invalid) {
      return;
    }

    if (this.currentHero.id) {
      this._heroService.updateHero(this.currentHero).subscribe(hero => {
        this.showSnackbar(`${hero.superhero} updated`);
        this.router.navigateByUrl(`/`);
      });
      return;
    }

    this._heroService.addHero(this.currentHero).subscribe(hero => {
      this.showSnackbar(`${hero.superhero} created`);
      this.router.navigateByUrl(`/heroes/edit/${hero.id}`);
    });
    console.log({
      isValid: this.heroForm.valid,
      value: this.heroForm.value,
    });
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this._activatedRoute.params
      .pipe(switchMap(({ id }) => this._heroService.getHeroById(id)))
      .subscribe(hero => {
        if (!hero) {
          return this.router.navigateByUrl('/');
        }
        this.heroForm.reset(hero);
        return;
      });
  }

  onDeleteHero() {
    if (!this.currentHero.id) {
      throw Error('Hero id is required');
    }
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: this.currentHero,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(result => result),
        switchMap(() => this._heroService.deleteHero(this.currentHero.id)),
        filter(wasDeleted => wasDeleted)
      )
      .subscribe(() => {
        this.router.navigateByUrl('/heroes');
      });
  }

  showSnackbar(msg: string) {
    this.snackbar.open(msg, 'done', { duration: 2500 });
  }
}
