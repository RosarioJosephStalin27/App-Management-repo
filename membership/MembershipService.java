package com.fitness.gym.service;

import com.fitness.gym.model.Membership;
import com.fitness.gym.repository.MembershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MembershipService {

    @Autowired
    private MembershipRepository membershipRepository;

    public List<Membership> getAllMemberships() {
        return membershipRepository.findAll();
    }

    public Optional<Membership> getMembershipById(Long id) {
        return membershipRepository.findById(id);
    }

    public Membership saveMembership(Membership membership) {
        return membershipRepository.save(membership);
    }

    public Membership updateMembership(Long id, Membership membershipDetails) {
        Optional<Membership> membership = membershipRepository.findById(id);

        if (membership.isPresent()) {
            Membership existingMembership = membership.get();
            existingMembership.setName(membershipDetails.getName());
            existingMembership.setTrainingType(membershipDetails.getTrainingType());
            existingMembership.setDuration(membershipDetails.getDuration());
            return membershipRepository.save(existingMembership);
        } else {
            throw new IllegalArgumentException("Membership not found with ID: " + id);
        }
    }

    public void deleteMembership(Long id) {
        if (!membershipRepository.existsById(id)) {
            throw new IllegalArgumentException("Membership not found with ID: " + id);
        }
        membershipRepository.deleteById(id);
    }
}
