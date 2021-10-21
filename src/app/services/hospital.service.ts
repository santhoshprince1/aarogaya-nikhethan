import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Hospital } from '../interfaces/hospital';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient:HttpClient) { }
  getHospitalByCity(city:string):Observable<Hospital[]>{
    return this.httpClient.get<Hospital[]>(`http://localhost:3000/hospital?address.city=${city}`)
  }
  postHospital(hospital:Hospital):Observable<Hospital>{
    return this.httpClient.post<Hospital>("http://localhost:3000/hospital",JSON.stringify(hospital),httpOptions)
  }
  updateHospital(id:number,hospital:Hospital):Observable<Hospital>{
    return this.httpClient.put<Hospital>(`http://localhost:3000/hospital/${id}`,JSON.stringify(hospital),httpOptions)
  }
  getHospitalByCredits(name:string,pass:string):Observable<Hospital>{
    return this.httpClient.get<Hospital>(`http://localhost:3000/hospital?hospitalname=${name}&&password=${pass}`)
  }
  getHospitalById(id:number):Observable<Hospital>{
    return this.httpClient.get<Hospital>(`http://localhost:3000/hospital/${id}`);
  }
}
