import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { HomeComponent } from './home/home.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './create-patient/create-patient.component';

const routes: Routes = [
  {path:'home/doctors', component:DoctorDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home/create-patient', component:CreatePatientComponent},
  {path:'home/patient-details',component:PatientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
