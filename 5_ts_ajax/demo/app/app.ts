import 'reflect-metadata';
import 'rxjs';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import {JSONP_PROVIDERS} from '@angular/http'

import {AppComponent} from './app.component'

bootstrap(AppComponent, [JSONP_PROVIDERS]);

console.log(JSONP_PROVIDERS);
