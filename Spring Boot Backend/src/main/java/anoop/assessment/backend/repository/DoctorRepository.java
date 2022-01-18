package anoop.assessment.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import anoop.assessment.backend.model.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

}
