package com.example.Capstone.Reelax.Repositories;

import com.example.Capstone.Reelax.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
