package com.example.Capstone.Reelax.Controllers;

import com.example.Capstone.Reelax.Movie;
import com.example.Capstone.Reelax.Repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping(value = "/movies")
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<>(movieRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/movies/{id}")
    public ResponseEntity getMovie(@PathVariable Long id){
        return new ResponseEntity<>(movieRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/movies")
    public ResponseEntity<Movie> postMovie(@RequestBody Movie movie){
        movieRepository.save(movie);
                return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @GetMapping(value = "/movies/search/{title}")
    public  ResponseEntity<List<Movie>> getMoviesByTitle(@PathVariable String title){
        return new ResponseEntity<>(movieRepository.findByTitleContainingIgnoreCase(title), HttpStatus.OK);
    }

    @GetMapping(value = "/movies/search/dates")
    public ResponseEntity<List<Movie>> getMoviesByDates(@RequestParam String start, @RequestParam String end){
        LocalDate startDate = LocalDate.parse(start);
        LocalDate endDate = LocalDate.parse(end);
        return new ResponseEntity<>(movieRepository.findMoviesBetweenDates(startDate, endDate), HttpStatus.OK);
    }

}
