package com.example.Capstone.Reelax.Components;


import com.example.Capstone.Reelax.Movie;
import com.example.Capstone.Reelax.Repositories.MovieRepository;
import com.example.Capstone.Reelax.Repositories.ReviewRepository;
import com.example.Capstone.Reelax.Repositories.UserRepository;
import com.example.Capstone.Reelax.Review;
import com.example.Capstone.Reelax.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    MovieRepository movieRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {


        User user1 = new User("UserOne","1234@gmail.com","1234");
        userRepository.save(user1);
        User user2 = new User("UserTwo","4321@gmail.com","4321");
        userRepository.save(user2);

        Movie movie1= new Movie("Underwhelming 2 hours of your life", "poster2", 2, "last week", false, user1);
        movieRepository.save(movie1);
        Movie movie2= new Movie("overwhelming 2 hours of your day", "poster13", 5, "yesterday", true, user2);
        movieRepository.save(movie2);

        Review review1 = new Review(user1, movie1, 5, "was alright i suppose");
        reviewRepository.save(review1);
        Review review2 = new Review(user2, movie2, 3, "was terrible really");
        reviewRepository.save(review2);

        user1.addReview(review1);
        userRepository.save(user1);

        user1.addMovie(movie1);
        userRepository.save(user1);

        movie1.setUser(user1);
        movieRepository.save(movie1);

        movie2.setUser(user2);
        movieRepository.save(movie2);















    }
}
