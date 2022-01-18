package anoop.assessment.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import anoop.assessment.backend.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	
	@Query(value="select count(*) from patient where doctor_id=?1",nativeQuery= true)
	int findByCountDid(int dId);
}
