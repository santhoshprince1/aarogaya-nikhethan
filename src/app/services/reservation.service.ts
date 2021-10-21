import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../interfaces/reservation';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }
   postReservation(reservation:Reservation):Observable<Reservation>{
     return this.httpClient.post<Reservation>("http://localhost:3000/reservation",JSON.stringify(reservation),httpOptions);
   }
}
