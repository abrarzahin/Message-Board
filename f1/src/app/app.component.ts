import { Component} from '@angular/core';
import { NavComponent} from './nav.component';
import {RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
     <nav> </nav>
     <router-outlet> </router-outlet>
  `,
})
export class AppComponent  {}
