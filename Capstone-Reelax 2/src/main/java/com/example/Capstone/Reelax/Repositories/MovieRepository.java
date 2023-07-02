package com.example.Capstone.Reelax.Repositories;

import com.example.Capstone.Reelax.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByTitleContainingIgnoreCase(String title);

    @Query("SELECT m FROM Movie m WHERE m.release BETWEEN :start AND :end")
    List<Movie> findMoviesBetweenDates(@Param("start") LocalDate start, @Param("end") LocalDate end);

    List<Movie> findByGenre(int genre);

}


