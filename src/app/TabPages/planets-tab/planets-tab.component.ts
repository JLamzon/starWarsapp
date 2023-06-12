import { Component } from '@angular/core';
import { Planets } from 'src/app/search-page/search';
import { SearchService } from '../../search-page/search-page.service';

@Component({
  selector: 'app-planets-tab',
  templateUrl: './planets-tab.component.html',
  styleUrls: ['./planets-tab.component.css']
})
export class PlanetsTabComponent {
  private _listFilter: string = '';
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string){
      this._listFilter = value;
      console.log('In Setter:', value)
      this.filteredCharacter = this.performFilter(value);
}

filteredCharacter: Planets[] = [];
character: Planets[] = [];
errorMessage: string = '';
loading: boolean = true; // Add a loading flag

    //when the component loads, text in here is used to filter the lost of products in the search field
    ngOnInit(): void {
      this.searchService.getPlanets().subscribe({
        next: character => {
            this.character = character;
            this.filteredCharacter = this.character;
        },
        error: err => { 
          this.errorMessage = err
      },
            complete: () => {
        this.loading = false; 
        }// Set loading to false when the API request is complete
      });
    };

    performFilter(filterBy: string): Planets[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.character.filter((product: Planets) => product.name.toLocaleLowerCase().includes(filterBy));
  };

  constructor(private searchService: SearchService) { }
  
}