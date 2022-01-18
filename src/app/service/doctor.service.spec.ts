import { Doctor } from './../model/doctor';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DoctorService } from './doctor.service';

describe('DoctorService', () => {
  let service: DoctorService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorService]
    });
    
  });

  beforeEach(() => {
    service = TestBed.get(DoctorService);
    httpTestController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestController.verify();
  });


  it('should test HttpClient.get', () => {
    const testData: Doctor[] = [
      {
          "dId": 1,
          "name": "Mark",
          "age": 29,
          "gender": "male",
          "field": "Neurology",
          "prescription": "Practice Meditation Daily"
      },
      {
          "dId": 2,
          "name": "David",
          "age": 33,
          "gender": "male",
          "field": "Orthodontics",
          "prescription": "Brush Regularly"
      },
      {
          "dId": 3,
          "name": "Rose",
          "age": 28,
          "gender": "female",
          "field": "Pediatrician",
          "prescription": "Eat Healthy Foods"
      }
  ]


    service.getDoctorsList().subscribe((data) => {
      expect(testData).toBe(data);
    })

    const req = httpTestController.expectOne("http://localhost:8081/doctors");

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testData);

    httpTestController.verify();
  });
});
