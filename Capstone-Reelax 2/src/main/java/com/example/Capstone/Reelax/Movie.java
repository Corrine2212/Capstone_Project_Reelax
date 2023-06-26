package com.example.Capstone.Reelax;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long Id;

    @Column(name="title")
    private String title;

    @Column(name="poster")
    private String poster;

    @Column(name="genre")
    private int genre;

    @Column(name="release")
    private String release;

    @Column(name="seen")
    private Boolean seen;

    @JsonBackReference
    @OneToMany(mappedBy = "movie")
    private List<Review> reviews;


    @ManyToOne()
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    public Movie(String title, String poster, int genre, String release, Boolean seen, User user) {
        this.title = title;
        this.poster = poster;
        this.genre = genre;
        this.release = release;
        this.seen = seen;
        this.reviews = new ArrayList<>();
        this.user = user;
    }

    public Movie(){

    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public int getGenre() {
        return genre;
    }

    public void setGenre(int genre) {
        this.genre = genre;
    }

    public String getRelease() {
        return release;
    }

    public void setRelease(String release) {
        this.release = release;
    }

    public Boolean getSeen() {
        return seen;
    }

    public void setSeen(Boolean seen) {
        this.seen = seen;
    }
}
