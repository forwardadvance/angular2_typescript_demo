import {Component} from '@angular/core';
import {CatsService} from './cats.service';

@Component({
  selector: 'cat-list',
  template: `
    <ul>
      <li *ngFor="#cat of cats">
        {{cat.name}}
      </li>
    </ul>
  `,
  directives: [],
  providers: [CatsService]

})

export class CatListComponent {
  cats:Array<any>
  constructor(cats: CatsService) {
      this.cats = cats.get();
  }
}
