package anoop.assessment.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import anoop.assessment.backend.model.Doctor;
import anoop.assessment.backend.repository.DoctorRepository;

@Service
public class DoctorService {
	
	@Autowired
	DoctorRepository doctorRepo;
	
	public List<Doctor> getAllDoctors(){
		return doctorRepo.findAll();
	}
	
	public Doctor createDoctor(Doctor doctor) {
		return doctorRepo.save(doctor);
	}
}
