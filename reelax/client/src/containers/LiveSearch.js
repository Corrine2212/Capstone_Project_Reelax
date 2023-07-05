import React, { useState, useEffect, useParams } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import MovieDetail from '../components/MovieDetail';
import styled from 'styled-components';

const LiveSearch = ({ currentSlide, findMovieById, settings, user, users, addToWatchList, reviews,
  genreIds, movies, yearRange, getMovieByTitle, setSearchInput, ratingRange , foundMovies }) => {




  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const StyledButton = styled(Link)`
    display: inline-block;
    padding: 13px 16px 8px 16px;
    background-color: red;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 10px;

    &:hover {
      background-color: #555;
    }
  `;


  useEffect(() => {
    setInput(''); // clear input on location change
    setSearchInput(''); // also clear the input in the parent component state
    getMovieByTitle('');
  }, [location]);

  const handleChange = event => {
    setInput(event.target.value);
    setSearchInput(event.target.value);
    getMovieByTitle(event.target.value);

  }

  const MovieDetailWrapper = () => {
    const { id } = useParams()
    let foundMovie = findMovieById(id)
    console.log("foundMovie", foundMovie);
    return <MovieDetail user={user} users={users} movie={foundMovie} addToWatchList={addToWatchList} reviews={reviews} genres={genreIds} />
  }

  const filteredMovies = movies.filter(movie => {
    const movieYear = new Date(movie.release).getFullYear();
    return movieYear >= yearRange.min && movieYear <= yearRange.max && movie.vote_average >= ratingRange.min && movie.vote_average <= ratingRange.max
  });

  const url = '/movies/';


  return (
    <div>
      <div>
        <div className="search-genre-wrapper">
          <div className="button-container">
          </div>
          <input className='movie-search-input' type="text" onChange={handleChange} value={input} placeholder="Search for a movie..." />
          <StyledButton to="/search/genre">Search by Movie Title</StyledButton>
          {foundMovies === "Not found" && 
            <p>Sorry, that movie doesn't exist.</p>
          }
        </div>
      </div>
      <div>
        <div className="main-carousel-wrapper">
          <h1 className='random-movie-title'>Random Movie</h1>
          <Slider {...settings}>
            {filteredMovies.map((movie, index) => (
              <div
                key={movie.id}
                className={index === currentSlide ? "current-slide" : "carousel-slide"}>
                <Link to={url + movie.id} element={<MovieDetailWrapper />}>
                  <div className="movie-card">
                    <div className="poster">
                      <img
                        id="main-carousel-poster"
                        alt={movie.title}
                        src={"https://image.tmdb.org/t/p/original" + movie.poster}

                      />
                    </div>
                    <div className="details">
                      <h2>{movie.title}</h2>
                      <p>{movie.release} | </p>

                      <p>{movie.overview}</p>
                      <b>
                        <p>Read more...</p>
                      </b>
                      {/* Include other movie details as needed */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default LiveSearch;



