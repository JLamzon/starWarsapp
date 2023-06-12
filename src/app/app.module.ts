import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlanetsTabComponent } from './TabPages/planets-tab/planets-tab.component';
import { SearchTabsComponent } from './search-page/search-tabs/search-tabs.component';
import { StarshipTabComponent } from './TabPages/starship-tab/starship-tab.component';
import { CharacterTabComponent } from './TabPages/character-tab/character-tab.component';
import { ClickedSearchComponent } from './search-page/clicked-search/clicked-search.component';
import { ModalComponent } from './search-page/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    PlanetsTabComponent,
    SearchTabsComponent,
    StarshipTabComponent,
    CharacterTabComponent,
    ClickedSearchComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'search', component: SearchPageComponent },
      { path: 'homepage', component: HomePageComponent },
      { path: 'characters', component: CharacterTabComponent },
      { path: 'starships', component: StarshipTabComponent },
      { path: 'planets', component: PlanetsTabComponent },
      { path: '', redirectTo: 'homepage', pathMatch:'full' },
      { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
  ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
