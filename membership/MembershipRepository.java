package com.fitness.gym.repository;

import com.fitness.gym.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, Long> {
    // No custom methods are needed for now, since basic CRUD operations are covered by JpaRepository.
}
