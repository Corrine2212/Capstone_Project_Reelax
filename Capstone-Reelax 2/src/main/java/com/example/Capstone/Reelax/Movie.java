package com.example.Capstone.Reelax;

import javax.persistence.*;

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

    @Column(name="vote_average", nullable = true)
    private double vote_average;

    @Column(name="backdrop", nullable = true)
    private String backdrop;




//    @JsonBackReference



    public Movie(String title, String overview, String poster, int genre, String release, double vote_average, String backdrop) {
        this.title = title;
        this.overview = overview;
        this.poster = poster;
        this.genre = genre;
        this.release = release;
        this.vote_average = vote_average;
        this.backdrop = backdrop;


    }

    public Movie(){

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

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
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

    public double getVote_average() {
        return vote_average;
    }

    public void setVote_average(double vote_average) {
        this.vote_average = vote_average;
    }

    public String getBackdrop() {
        return backdrop;
    }

    public void setBackdrop(String backdrop) {
        this.backdrop = backdrop;
    }
}
