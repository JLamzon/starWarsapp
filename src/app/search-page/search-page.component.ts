import { Component, OnInit } from '@angular/core';
import { SearchService } from './search-page.service';
import { Character } from './search';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{

  private _listFilter: string = '';
  get listFilter(): string {
      return this.searchTerm;
  }
  set listFilter(value: string){
      this._listFilter = value;
      console.log('In Setter:', value)
      this.filteredCharacter = this.performFilter(value);
  }


  filteredCharacter: Character[] = [];
  character: Character[] = [];
  errorMessage: string = '';
  loading: boolean = true; // Add a loading flag
  searchTerm: string = '';
  selectedCharacter: Character | null = null


  openModal(character: Character) {
    this.selectedCharacter = character;
    const modal = document.querySelector('modal');
    modal?.classList.remove('hidden');
  }

  closeModal(){
    this.selectedCharacter = null;
    const modal = document.querySelector('modal');
    modal?.classList.add('hidden');
  }

  
    //when the component loads, text in here is used to filter the lost of products in the search field
    ngOnInit(): void {
      this.searchService.getCharacters().subscribe({
        next: character => {
          console.log('Characters:', character);
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

    performFilter(filterBy: string): Character[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.character.filter((product: Character) => product.name.toLocaleLowerCase().includes(filterBy));

    // filterCharacters(): void {
    //   this.filteredCharacter = this.character.filter(character =>
    //     character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    //   );
  };

  constructor(private searchService: SearchService) { }
}
