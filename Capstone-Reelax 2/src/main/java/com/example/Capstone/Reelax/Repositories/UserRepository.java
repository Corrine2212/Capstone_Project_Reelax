package com.example.Capstone.Reelax.Repositories;

import com.example.Capstone.Reelax.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
