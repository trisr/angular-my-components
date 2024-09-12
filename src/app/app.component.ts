import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MyComponentComponent } from './my-component/my-component.component';
import { AlertComponent } from './alert/alert.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyComponentComponent,
    AlertComponent,
    FirstComponent,
    SecondComponent,
    RouterLinkActive,
    RouterLink,
    CrisisListComponent,
    HeroesListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-components';
}
