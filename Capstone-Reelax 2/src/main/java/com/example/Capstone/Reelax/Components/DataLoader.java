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


        User user1 = new User("Scott","1234@gmail.com","1234");
        userRepository.save(user1);
        User user2 = new User("Callum","4321@gmail.com","4321");
        userRepository.save(user2);

        Movie movie1= new Movie("Pronoun", "Pronoun is a gripping crime documentary that delves into the dark and twisted mind of Scott.", "poster2", 60, "last week", 0.0, "kjhkjhk");
        movieRepository.save(movie1);

        Review review1 = new Review(user1.getId(), movie1.getId());
        reviewRepository.save(review1);




















    }
}
