package anoop.assessment.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import anoop.assessment.backend.model.Doctor;
import anoop.assessment.backend.model.Patient;
import anoop.assessment.backend.repository.DoctorRepository;
import anoop.assessment.backend.repository.PatientRepository;

@SpringBootTest
class BackendApplicationTests {
	
	@Autowired
	DoctorRepository doctorRepo;
	
	@Autowired
	PatientRepository patientRepo;
	
	Doctor doctor = new Doctor();
	
	@Test
	public void testCreateDoctor() {
		doctor.setdId(3);
		doctor.setName("Rom");
		doctor.setAge(29);
		doctor.setField("Neurology");
		doctor.setGender("male");
		doctor.setPrescription("Drink Water Regularly");
		doctorRepo.save(doctor);
		assertNotNull(doctorRepo.findById(3));
		
	}

	@Test
	public void testCreatePatient() {
		Patient patient = new Patient();
		Doctor doctor = new Doctor();
		patient.setId(108);
		patient.setName("Mahesh");
		patient.setDateOfVisit("11/02/2018");
		patient.setDoctor(doctor);
		assertNotNull(patientRepo.findById(108));
	}
	
	@Test
	public void testAllDoctors() {
		List<Doctor> doctor = doctorRepo.findAll();
		assertTrue(doctor.size()>0);
	}
	
	@Test
	public void testAllPatients() {
		List<Patient> patient = patientRepo.findAll();
		assertTrue(patient.size()>0);
	}
	
	@Test
	public void getPatientById() {
		Patient patient = patientRepo.findById(101).get();
		assertEquals(101,patient.getId());
	}
	
	@Test
	public void testByCount() {
		int count = patientRepo.findByCountDid(1);
		assertEquals(2, count);
	}

}
