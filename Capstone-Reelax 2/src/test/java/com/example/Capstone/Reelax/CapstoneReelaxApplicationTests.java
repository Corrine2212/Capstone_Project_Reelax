package com.example.Capstone.Reelax;

import com.example.Capstone.Reelax.Repositories.MovieRepository;
import com.example.Capstone.Reelax.Repositories.ReviewRepository;
import com.example.Capstone.Reelax.Repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CapstoneReelaxApplicationTests {
	@Autowired
	UserRepository userRepository;

	@Autowired
	MovieRepository movieRepository;

	@Autowired
	ReviewRepository reviewRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createUser() {
		User user = new User("ecgizzle", "ewan@mail.com", "jesusMan");
		userRepository.save(user);
		Movie movie = new Movie("The Great Chungus", "url:picture", 22, "12.08.2022", false, user);
		movieRepository.save(movie);
		Review review = new Review(user, movie, 4, "great Chungus full of fun!");
		reviewRepository.save(review);

		user.addReview(review);
		userRepository.save(user);

		user.addMovie(movie);
		userRepository.save(user);
	}






}
