package com.example.Capstone.Reelax.Repositories;

import com.example.Capstone.Reelax.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
}
