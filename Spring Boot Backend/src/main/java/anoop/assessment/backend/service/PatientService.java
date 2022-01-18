package anoop.assessment.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import anoop.assessment.backend.exception.ResourceNotFoundException;
import anoop.assessment.backend.model.Patient;
import anoop.assessment.backend.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	PatientRepository patientRepo;
	
	public Patient createPatient(Patient patient) {
		return patientRepo.save(patient);
	}
	
	public List<Patient> getAllPatients(){
		return patientRepo.findAll();
	}
	
	public  ResponseEntity<Patient> getPatientById(int id) {
		Patient patient = patientRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Patient Record not found"));
		return ResponseEntity.ok(patient);
	}
	
	public int countByDid(int id) {
		return patientRepo.findByCountDid(id);
	}
}
