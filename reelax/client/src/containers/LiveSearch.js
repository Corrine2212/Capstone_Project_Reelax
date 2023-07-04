import React, { useState, useEffect, useParams } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import MovieDetail from '../components/MovieDetail';

const LiveSearch = ({currentSlide, findMovieById, settings, user, users, addToWatchList, reviews, 
  genreIds, movies, yearRange, getMovieByTitle, setSearchInput, ratingRange}) => {

  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  

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
    return <MovieDetail user={user} users={users} movie={foundMovie} addToWatchList={addToWatchList} reviews={reviews} genres={genreIds}/>
  }

  const filteredMovies = movies.filter(movie => {
    const movieYear = new Date(movie.release).getFullYear();
    return movieYear >= yearRange.min && movieYear <= yearRange.max && movie.vote_average >= ratingRange.min && movie.vote_average <= ratingRange.max
  });

  const url = '/movies/';
 

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={input} placeholder="Search for a movie..." />
      </div>
      <div>
      <div className="main-carousel">
            <h1>Main Carousel</h1>
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
                        <p>{movie.overview}</p>
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


  
