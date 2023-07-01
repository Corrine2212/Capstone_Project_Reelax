import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import MovieDetail from "./MovieDetail";

const SmallerCarousels = ({ movie, genre, findMovieById }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = () => {
            fetch(`/api/movies?genre=${genre}`)
                .then(response => response.json())
                .then(data => setMovies(data.slice(0, 9)))
                .catch(error => console.log('Error fetching movies:', error));
        };
        fetchMovies();
    }, [genre]);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1000,
    };

        const MovieDetailWrapper = () => {
        const {id} = useParams()
        let foundMovie = findMovieById(id)
        return <MovieDetail movie={foundMovie}/>
    }

    const url = "/movies/" + movie.id;


    return (
        <>
            <div className="content">
                <h1 className="header">All Movies</h1>
                <div className="sml-carousel-container">
                    <Slider {...settings}>
                        {movies.map((movie) => (
                            <div>
                                <Link to={url} element={<MovieDetailWrapper/>}>
                                    <img
                                        id="poster"
                                        alt={movie.title}
                                        className="img"
                                        src={"https://image.tmdb.org/t/p/original" + movie.poster}
                                    />
                                </Link>
                                <h5 className="title">{movie.title}</h5>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="content">
                <h1 className="header">Comedy</h1>
                <div className="sml-carousel-container">
                    <Slider {...settings}>
                        {movies.map((movie) => (
                            <div>
                                <img
                                    id="poster"
                                    alt={movie.title}
                                    className="img"
                                    src={"https://image.tmdb.org/t/p/original" + movie.poster}
                                />
                                <h5 className="title">{movie.title}</h5>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default SmallerCarousels;
