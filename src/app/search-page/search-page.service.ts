import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { concatMap,catchError, map } from 'rxjs/operators';
import { Character } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private peopleUrl = 'https://swapi.dev/api/people';
  private starshipsUrl = 'https://swapi.dev/api/starships';
  private planetsUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) {}

  // getCharacters(): Observable<Character[]> {
  //   return this.http.get<Character[]>(this.peopleUrl).pipe(
  //     map((response: any) => {
  //       console.log('API Response:', response);
  //       return response.results
  //   }),
  //     catchError(this.handleError)
  //   );
  // }

  getCharacters(): Observable<Character[]> {
    return this.fetchAllPages(this.peopleUrl, []);
  }

  getPlanets(): Observable<any[]> {
    return this.fetchAllPages(this.planetsUrl, []);
  }

  getStarships(): Observable<any[]> {
    return this.fetchAllPages(this.starshipsUrl, []);
  }

  
  private fetchAllPages(url: string, allData: any[]): Observable<any> {
    return this.http.get<any>(url).pipe(
      concatMap((response: any) => {
        const data = response.results;
        allData.push(...data);
        const nextUrl = response.next;
        if (nextUrl) {
          return this.fetchAllPages(nextUrl, allData);
        } else {
          return of(allData as Character[]);
        }
      }),
      catchError(this.handleError)
    );
  }




  searchCharacters(searchTerm: string): Observable<any> {
    const url = `https://swapi.dev/api/people/?search=${searchTerm}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => response.results),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
