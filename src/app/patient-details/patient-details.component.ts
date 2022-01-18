import { PatientService } from './../service/patient.service';
import { Patient } from './../model/patient';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient: Patient = new Patient();
  id!: number;
  doctor: Doctor = new Doctor();
  errorMessage : string | undefined = undefined;
  selected = false;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.selected = true;
    this.getPatient();   
  }

  getPatient(){
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
      this.doctor = data.doctor;

    }, (error) =>{
      this.errorMessage = error
    })
    
  }
  

}
