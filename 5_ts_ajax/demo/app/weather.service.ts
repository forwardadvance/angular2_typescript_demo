import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

@Injectable()
export class WeatherService {
  url
  jsonp
  constructor(jsonp: Jsonp) {
    this.jsonp = jsonp;
  }
  get() {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSONP_CALLBACK"
    return this.jsonp.get(url)
  }
}
