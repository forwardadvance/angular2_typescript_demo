import {Component} from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
    selector: 'weather',
    template: `
      <pre>{{weather | json}}</pre>
    `,
    directives: [],
    providers: [WeatherService]

})
export class WeatherComponent {
  weather: any;
  constructor(weather: WeatherService) {
    weather.get()
      .subscribe((response) => {
        this.weather = response.json()
      })
  }
}
