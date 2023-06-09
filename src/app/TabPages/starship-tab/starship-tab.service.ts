import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Starship } from '../../search-page/search';

@Injectable({
  providedIn: 'root'
})
export class StarshipTabComponent {
  private peopleUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

  getStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.peopleUrl).pipe(
      map((response: any) => {
        console.log('API Response:', response);
        return response.results
    }),
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
