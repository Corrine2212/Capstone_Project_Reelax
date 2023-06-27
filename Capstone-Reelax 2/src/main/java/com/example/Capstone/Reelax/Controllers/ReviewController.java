package com.example.Capstone.Reelax.Controllers;

import com.example.Capstone.Reelax.Repositories.ReviewRepository;
import com.example.Capstone.Reelax.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping(value = "/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity getReview(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }
}
