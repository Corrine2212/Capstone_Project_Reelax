package com.example.Capstone.Reelax;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


//    @JsonBackReference
    @Column(name="user_id")
    private Long user_id;


    @Column(name="movie_id")
    private Long movie_id;

    @Column(name = "stars")
    private int stars;

    @Column(name = "review")
    private String review;


    @Column(name="seen")
    private Boolean seen;

    public Review(Long user_id, Long movie_id) {
        this.user_id = user_id;
        this.movie_id = movie_id;
        this.stars = 0;
        this.review = "";
        this.seen = false;
    }

    public Review(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(Long movie_id) {
        this.movie_id = movie_id;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Boolean getSeen() {
        return seen;
    }

    public void setSeen(Boolean seen) {
        this.seen = seen;
    }
}
