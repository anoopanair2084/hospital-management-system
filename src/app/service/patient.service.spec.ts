import { Patient } from './../model/patient';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PatientService } from './patient.service';
import { HttpErrorResponse } from '@angular/common/http';


describe('PatientService', () => {
  let service: PatientService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(PatientService);
    httpTestController = TestBed.get(HttpTestingController);
  });

  it('should add patient to database', () => {
    const patient: Patient = {
      "id": 108,
      "age":20,
      "name": "Rakesh Mehra",
      "doctor": {
        "dId": 1,
        "name": "Mark",
        "age": 29,
        "gender": "male",
        "field": "Neurology",
        "prescription": "Practice Meditation Daily"
    },
      "dateOfVisit": "02/05/2019"
  }

    service.createPatient(patient).subscribe((data)=>{
      expect(data).toBe(patient);
    })

    const req = httpTestController.expectOne("http://localhost:8081/patients");
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(patient);

    // httpTestController.verify();
  });

  // it('Checking 404 error', () => {
  //   const errorMessage = "Mock 404 error occured";
  //   service.getPatientById(108).subscribe((data) => {
  //     fail('failing with error 404');
  //   }, (error: HttpErrorResponse) => {
  //     expect(error.status).toEqual(404);
  //     expect(error.error).toEqual(errorMessage);
  //   })
  //   const url = "http://localhost:8081/patients"
  //   const id = 118;
  //   const req = httpTestController.expectOne(`${url}/${id}`);

  //   req.flush(errorMessage, {status:404, statusText: 'Not Found'});
  // });


});
