import {Component} from '@angular/core';

import {ButtonComponent} from './app.buttonComponent';

@Component({
    selector: 'app',
    template: `
      <h1>Hello {{name}}</h1>
      <like-button></like-button>
    `,
    directives: [ButtonComponent]

})
export class AppComponent {
  private name: string
  constructor() {
    this.name = 'Dave'
  }
}
