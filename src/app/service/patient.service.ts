import { Patient } from './../model/patient';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  createPatient(patient: Patient): Observable<Object>{
    return this.httpClient.post("http://localhost:8081/patients",patient)
  }
  url = "http://localhost:8081/patients"
  getPatientById(id: Number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.url}/${id}`).pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError("No such Patient exist in the Database");
  }
}
