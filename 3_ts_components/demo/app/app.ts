import 'reflect-metadata';
import 'rxjs';
import 'zone.js';

import { bootstrap } from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component'

document.addEventListener('DOMContentLoaded', function() {
  bootstrap(AppComponent);
});
