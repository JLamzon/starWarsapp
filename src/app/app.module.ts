import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'search', component: SearchPageComponent },
      { path: 'homepage', component: HomePageComponent },
      { path: '', redirectTo: 'welcome', pathMatch:'full' },
  ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
