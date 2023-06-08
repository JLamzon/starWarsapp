import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1 style="color:yellow">{{pageTitle}}</h1>
  <ul>
  <li><a class="nav-link" routerLink="/homepage">Home</a></li>
  <li><a class="nav-link" routerLink="/search">Search Page</a></li>
  </ul>
  </div>
  <div class="container">
  <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pageTitle: string = 'Stars Wars Directory';
}
