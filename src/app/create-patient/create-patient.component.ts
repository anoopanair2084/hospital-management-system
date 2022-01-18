import { Patient } from './../model/patient';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './../model/doctor';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { PatientService } from '../service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  doctors!: Doctor[];
  doctor!: Doctor;
  patient: Patient = new Patient();
  date: any;
  select = 'Select';
  selected = false;

  constructor(private doctorService: DoctorService,private patientService: PatientService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctor();
  }

  getDoctor(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    })
  }

  selectDoctor(doctor: Doctor){
    this.patient.doctor=doctor;
    this.selected=true;
    this.select=doctor.name;
    console.log(doctor)
  }

  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.navigate();
    })
  }

  navigate(){
    this.router.navigate(['/home'])
  }

  

}
