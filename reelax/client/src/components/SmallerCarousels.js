import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import MovieDetail from "./MovieDetail";
import styled from 'styled-components';
import {Fire} from '@styled-icons/remix-line';


const SmallerCarousels = ({ movies, genres, findMovieById }) => {
    const [filteredMovies, setFilteredMovies] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('')

    useEffect(() => {
    });
    
    const StyledLink = styled(Link)`
    color: #333;
    text-decoration: none;
    font-weight: bold;
    `;

    const StyledFireIcon = styled(Fire)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    `;

    // useEffect(() => {
        
    //     const fetchMovies = () => {
    //         if (genre === '') {
    //             getMoviesByGenre('');
    //         } else {
    //             getMoviesByGenre(genre);
    //         }
    //     };
    //     fetchMovies();
    // }, [genre, getMoviesByGenre]);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust the number of visible slides on larger screens
        slidesToScroll: 3, // Adjust the number of slides to scroll on larger screens
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024, // Adjust the breakpoint value as needed
            settings: {
              slidesToShow: 3, // Adjust the number of visible slides on medium-sized screens
              slidesToScroll: 2, // Adjust the number of slides to scroll on medium-sized screens
            },
          }
        //   {
        //     breakpoint: 768, 
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1, 
        //     },
        //   },
        ],
      };
      

    const MovieDetailWrapper = () => {
        const {id} = useParams()
        let foundMovie = findMovieById(id)
        return <MovieDetail movie={foundMovie}/>
    }

    const url = "/movies/";

    
    const setChange = (event) => {
        const chosenGenre = genres[event.target.value]
        setSelectedGenre(chosenGenre)
    }
    
    console.log("genres", genres);
    const genreOptions = genres.map((genre, index) => {
        return <option value={index}>
            {genre.name}
        </option>
    })

    let moviesByGenre = []
    for (let movie of movies){
        if (movie.genre === selectedGenre.id){
            moviesByGenre.push(movie)
        }
    }
    console.log("result", moviesByGenre);

    console.log(selectedGenre);

    return (
        <>
            {/* <div className="content">
                <h1 className="sml-carousel-header">Trending <StyledFireIcon/></h1> 
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
                            </div>
                        ))}
                    </Slider>
                </div>
            </div> */}

            <div className="content">
                <h1 className="sml-carousel-header">Comedy</h1>
                <select defaultValue='' onChange={setChange}>
                    <option value="" selected>Movies by Genre</option>
                    {genreOptions}
                </select>
                <div className="sml-carousel-container">
                <Slider {...settings}>
                    {moviesByGenre.map((movie, index) => {
                            return <div key={index}>
                                <Link to={"/movies/" + movie.id}>
                                <img id="poster"
                                alt={movie.title}
                                className="img"
                                src={"https://image.tmdb.org/t/p/original" + movie.poster}
                                />
                                </Link>
                            </div>
                        })}
                </Slider>
                </div>
            </div>
        </>
    );
}

export default SmallerCarousels;
