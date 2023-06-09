import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Character } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private peopleUrl = 'https://swapi.dev/api/people';
  private starshipsUrl = 'https://swapi.dev/api/starships';
  private planetsUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.peopleUrl).pipe(
      map((response: any) => {
        console.log('API Response:', response);
        return response.results
    }),
      catchError(this.handleError)
    );
  }

  getPlanets(): Observable<any[]> {
    return this.http.get<any>(this.planetsUrl).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  getStarships(): Observable<any[]> {
    return this.http.get<any>(this.starshipsUrl).pipe(
      map(response => response.results),
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
