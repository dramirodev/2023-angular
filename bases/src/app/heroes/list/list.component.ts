import {Component} from '@angular/core';

@Component({
  selector   : 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls  : ['./list.component.css'],
})
export class ListComponent {
  public heroesNames: string[] = [
    'Spider man',
    'Iron man',
    'Viuda negra',
    'Hulk',
    'Thor',
    'She Hulk'];
  public deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.heroesNames.pop();
  }
}
