import { Doctor } from './../model/doctor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { }

  getDoctorsList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>("http://localhost:8081/doctors")
  }

  url = "http://localhost:8081/did"
  getTotalPatients(id: Number): Observable<number>{
    return this.httpClient.get<number>(`${this.url}/${id}`)
  }
}
