import {Component} from '@angular/core';

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

})

export class CatListComponent {
  cats:Array<any>
  constructor() {
    this.cats = [
      { name: "Danger Moog" },
      { name: "Pippa T. Floof" },
      { name: "Sniff Weasel" }
    ]
  }
}
