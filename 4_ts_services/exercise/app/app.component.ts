import {Component} from '@angular/core';
import {CatListComponent} from './catlist.component';

@Component({
    selector: 'app',
    template: `
      <h1>Cats!</h1>
      <cat-list></cat-list>
    `,
    directives: [CatListComponent],

})
export class AppComponent {
  constructor() {
  }
}
