package com.example.Capstone.Reelax;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @Column(name="title", nullable = true)
    private String title;

    @Column(name="overview", nullable = true)
    private String overview;

    @Column(name="poster", nullable = true)
    private String poster;

    @Column(name="genre", nullable = true)
    private int genre;

    @Column(name="release", nullable = true)
    private String release;

    @Column(name="seen", nullable = true)
    private Boolean seen;


//    @JsonBackReference

    @JsonIgnoreProperties({"movie", "user"})
    @OneToMany(mappedBy = "movie")
    private List<Review> reviews;

    @JsonIgnoreProperties({"movies"})
    @ManyToOne()
    @JoinColumn(name="user_id", nullable = true)
    private User user;

    public Movie(String title, String overview, String poster, int genre, String release, Boolean seen, User user) {
        this.title = title;
        this.overview = overview;
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

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
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
