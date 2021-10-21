import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  getUserByCredits(name: string, pass: string, typ: string): Observable<User> {
    return this.httpClient
      .get<User>(
        `http://localhost:3000/user?userName=${name}&&password=${pass}&&userType=${typ}`
      )
      .pipe(catchError(this.handleError));
  }
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      'http://localhost:3000/user',
      JSON.stringify(user),
      httpOptions
    ).pipe(catchError(this.handleError));;
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(
      `http://localhost:3000/user/${id}`,
      JSON.stringify(user),
      httpOptions
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    }
     else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('please try again later.');
  }
}
