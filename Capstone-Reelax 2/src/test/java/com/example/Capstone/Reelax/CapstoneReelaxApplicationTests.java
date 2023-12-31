package com.example.Capstone.Reelax;

import com.example.Capstone.Reelax.Repositories.MovieRepository;
import com.example.Capstone.Reelax.Repositories.ReviewRepository;
import com.example.Capstone.Reelax.Repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class CapstoneReelaxApplicationTests {
	@Autowired
	UserRepository userRepository;

	@Autowired
	MovieRepository movieRepository;

	@Autowired
	ReviewRepository reviewRepository;

	Movie movie;


	@Test
	void contextLoads() {
	}

	@Test
	public void createUser() {


//		user.addReview(review);
//		userRepository.save(user);
//
//		user.addMovie(movie);
//		userRepository.save(user);

	}

	@Test
	public void findByGenre() {

		List<Movie> found = movieRepository.findByGenre(16);
		assertTrue(found.size() > 0);
	}





}
