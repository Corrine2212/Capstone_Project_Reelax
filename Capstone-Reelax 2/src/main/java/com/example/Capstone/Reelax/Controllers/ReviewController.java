package com.example.Capstone.Reelax.Controllers;

import com.example.Capstone.Reelax.Repositories.ReviewRepository;
import com.example.Capstone.Reelax.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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

    @PostMapping(value="/reviews")
    public ResponseEntity<Review> postReview(@RequestBody Review review){
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @DeleteMapping(value="/reviews/{id}")
    public ResponseEntity<Review> deleteReview(@PathVariable Long id) {
        Review found = reviewRepository.getOne(id);
        reviewRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PatchMapping(value="/reviews/{id}")
    public ResponseEntity<Review> updateReview(@RequestBody Review review){
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.OK);
    }
}
