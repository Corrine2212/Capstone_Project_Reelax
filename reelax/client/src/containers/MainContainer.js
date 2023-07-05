import React, { useState, useEffect } from 'react'
import Request from '../helpers/request'
import LiveSearch from './LiveSearch'
import MovieCard from '../components/MovieCard';
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard';
import NavBar from './NavBar';
import MovieDetail from '../components/MovieDetail';
import { flushSync } from 'react-dom';
import MovieSearchCard from '../components/MovieSearchCard';
import styled from 'styled-components';
import "./MainContainer.css"
import GenreFilter from './GenreFilter';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import SmallerCarousels from '../components/SmallerCarousels';
import YearSlider from '../components/YearSlider';
import RatingSlider from '../components/RatingSlider';


const MainContainer = ({ users, user, removeUser, onUserLogout, addToWatchList }) => {


  const [movies, setMovies] = useState([])
  console.log("main users", users)
  const [reviews, setReviews] = useState([])
  const [movieTitle, setMovieTitle] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [foundMovies, setFoundMovies] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [yearRange, setYearRange] = useState({ min: 2000, max: 2023 });
  const [ratingRange, setRatingRange] = useState({ min: 0.0, max: 10.0 });


 

  useEffect(() => {
    getMovies();
    getReviews();
  }, [])

  useEffect(() => {
    if (movies.length > 0) {
      runFilters();
    }
  }, [movies, yearRange, ratingRange])



  const getMovies = () => {
    const request = new Request()
    request.get("/api/movies")
      .then((data) => {
        setMovies(data)
      })
  }


  const getReviews = () => {
    const request = new Request()
    request.get("/api/reviews")
      .then((data) => {
        setReviews(data)
      })
  }

  const getMovieByTitle = (title) => {
    const request = new Request();
    if (title === '') {
      getMovies();
    }
    if (title) {
      request.get("/api/movies/search/" + title)
        .then((data) => {
          setMovies(data);
        });
    } else {
      getMovies();
    }
  }

  const handleLogout = () => {
    onUserLogout();
  }


  const handleDelete = (id) => {
    const request = new Request()
    const url = "/api/users/" + id;
    request.delete(url)
      .then(() => {
        window.location = "/users"
      })
  }

  // const getMovies = function () {
  // const allRequests = []
  // for (let i = 1; i <= 1000; i++){
  //   const newFetch = fetch("http://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&page=" + i)
  //   .then(response => response.json())
  //   allRequests.push(newFetch)
  // }
  //   Promise.all(allRequests)
  //   .then((data) => saveToDb(data))

  // }

  // const saveToDb =(data) =>{
  //   for(let result of data){

  //     for(let movie of result.results){
  //       let newMovie = {
  //         "title": movie.title,
  //         "overview": movie.overview,
  //         "poster": movie.poster_path,
  //         "genre": movie.genre_ids[0], 
  //         "release": movie.release_date,
  //         "vote_average": movie.vote_average,
  //         "backdrop": movie.backdrop_path 
  //       }

  //       console.log(newMovie);
  //       let request = new Request()
  //     request.post("/api/movies", newMovie)
  //     }
  //   }

  // }

  const genreIds = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  const findMovieById = (id) => {
    let foundMovie = null;
    for (let movie of movies) {
      if (movie.id === parseInt(id)) {
        foundMovie = movie
      }
    }
    return foundMovie
  }


  const MovieDetailWrapper = () => {
    const { id } = useParams()
    let foundMovie = findMovieById(id)
    console.log("foundMovie", foundMovie);
    return <MovieDetail user={user} users={users} movie={foundMovie} addToWatchList={addToWatchList} reviews={reviews} genres={genreIds} />
  }

  let filteredMovies = []
  let movieDisplay = []
  let movieSearchDisplay = []

  const runFilters = () => {


    filteredMovies = movies.filter(movie => {
      const movieYear = new Date(movie.release).getFullYear();
      return movieYear >= yearRange.min && movieYear <= yearRange.max && movie.vote_average >= ratingRange.min && movie.vote_average <= ratingRange.max;
    });


    console.log("filtered movies", filteredMovies);

    movieDisplay = filteredMovies.map((movie, index) => {
      return <li key={index}><MovieCard movie={movie} findMovieById={findMovieById} /></li>
    })



    // movieSearchDisplay = movies.map((movie, index) => {
    //   return <MovieSearchCard key={index} movie={movie} />
    // })
  }




  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: false,
    autoplaySpeed: 1000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => { setCurrentSlide(next) },
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint value as needed
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const url = '/movies/';

  // Main Carousel Code End



  return (
    <div>
      <div>
        {/* <Router> */}

        <NavBar handleLogout={handleLogout} setSearchInput={setSearchInput} user={user} />
        
        <Routes>
          {movies.length > 0 ? <Route path="/" element={[<LiveSearch currentSlide={currentSlide} findMovieById={findMovieById} user={user}
            settings={settings} users={users} addToWatchList={addToWatchList} reviews={reviews} genreIds={genreIds}
            getMovieByTitle={getMovieByTitle} movies={movies} searchInput={searchInput} yearRange={yearRange} ratingRange={ratingRange}
            setSearchInput={setSearchInput} />,
            , <YearSlider yearRange={yearRange} setYearRange={setYearRange} />, <RatingSlider ratingRange={ratingRange} setRatingRange={setRatingRange} />]} /> : null}
          <Route path="search/genre" element={<SmallerCarousels movies={movies} genres={genreIds} findMovieById={findMovieById} />} />
          <Route path="/movies/:id" element={<MovieDetailWrapper />} />
          <Route path="/profile" element={<ProfileCard key={user.id} user={user} handleDelete={handleDelete} reviews={reviews} movies={movies} MovieDetailWrapper={MovieDetailWrapper} getReviews={getReviews} />} />
        </Routes>



        {/* </Router> */}
      </div>
      <ul>

        {/* <p>this is a movie container</p>

                {movieDisplay} 
                {/* {userDisplay}
                {reviewDisplay} */}
      </ul>
    </div>
  );
}



export default MainContainer;