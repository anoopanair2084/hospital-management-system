package anoop.assessment.backend.controller;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import anoop.assessment.backend.exception.ResourceNotFoundException;
import anoop.assessment.backend.model.Doctor;
import anoop.assessment.backend.model.Patient;
import anoop.assessment.backend.repository.DoctorRepository;
import anoop.assessment.backend.repository.PatientRepository;
import anoop.assessment.backend.service.DoctorService;
import anoop.assessment.backend.service.PatientService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200/")
public class HospitalController {
	
	@Autowired
	DoctorService doctorService;
	
	@Autowired
	PatientService patientService;
	
	@PostMapping("/doctors")
	public Doctor createDoctor(@RequestBody Doctor doctor) {
		return doctorService.createDoctor(doctor);
	}
	
	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors(){
		return doctorService.getAllDoctors();
	}
	
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient patient) {
		return patientService.createPatient(patient);
	}
	
	@GetMapping("/patients")
	public List<Patient> getAllPatients(){
		return patientService.getAllPatients();
	}
	
	@GetMapping("/patients/{id}")
	public  ResponseEntity<Patient> getPatientById(@PathVariable("id") int id) {
		return patientService.getPatientById(id);
	}
	
	@GetMapping("/did/{id}")
	public int countByDid(@PathVariable("id") int id) {
		return patientService.countByDid(id);
	}
	
}
