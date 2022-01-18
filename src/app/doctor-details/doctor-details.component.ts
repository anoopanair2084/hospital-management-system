import { Doctor } from './../model/doctor';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctors!: Doctor[];
  doctorDetails!: Doctor;
  selected = false;
  patients!: number;
  did!: any;
  select = 'Select';
  selected1 = false;
  
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();   
  }

  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    })
  }

  selectDoctor(doctor: Doctor){
    this.doctorDetails = doctor;
    this.did = doctor.dId;
    this.selected = true;
    this.selected1=true;
    this.select=doctor.name;
    this.patientsVisited();
  }

  patientsVisited(){
    this.doctorService.getTotalPatients(this.did).subscribe(data => {
      this.patients = data;
    })
  }


}
