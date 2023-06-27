package com.example.Capstone.Reelax.Controllers;

import com.example.Capstone.Reelax.Movie;
import com.example.Capstone.Reelax.Repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
