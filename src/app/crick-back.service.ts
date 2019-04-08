import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrickBackService {

  constructor(private http: HttpClient) { }

  readonly endpoint = 'http://127.0.0.1:5000/';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getPlayers(): Observable<any> {
    return this.http.get(this.endpoint + 'players').pipe(
      map(this.extractData));
  }

  postPlayers(players): Observable<any> {
    return this.http.post<any>(this.endpoint + 'selectedPlayers/', JSON.stringify(players), this.httpOptions).pipe(
      tap((player) => console.log(`added player w/ id=${player.id}`)),
      catchError(this.handleError<any>('addPlyer'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
