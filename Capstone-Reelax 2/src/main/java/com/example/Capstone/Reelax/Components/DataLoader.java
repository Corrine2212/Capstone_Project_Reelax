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

        Movie movie1= new Movie("Underwhelming 2 hours of your life", "depressing", "poster2", 2, "last week", "kjhkjhk");
        movieRepository.save(movie1);
        Movie movie2= new Movie("Jaws", "excellent", "poster2", 2, "last week", "kjhkjhk");
        movieRepository.save(movie2);

        Review review1 = new Review(user1.getId(), movie1.getId());
        reviewRepository.save(review1);
        Review review2 = new Review(user2.getId(), movie2.getId());
        reviewRepository.save(review2);

















    }
}
