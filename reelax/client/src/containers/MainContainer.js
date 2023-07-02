import React, { useState, useEffect } from 'react'
import Request from '../helpers/request'
import LiveSearch from './LiveSearch'
import MovieCard from '../components/MovieCard';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard';
import NavBar from './NavBar';
import MovieDetail from '../components/MovieDetail';
import { flushSync } from 'react-dom';
import MovieSearchCard from '../components/MovieSearchCard';
import styled from 'styled-components';
import "./MainContainer.css"
import GenreFilter from './GenreFilter';

const MainContainer = ({users, user, removeUser, onUserLogout, addToWatchList }) => {


  const Footer = styled.footer`
  position: fixed;
    left: 0;
    bottom: 15px;
    width: 100%;
    /* text-align: center; */
    margin-top: 20px;
    position: fixed;
    margin-top: auto;
    z-index: 1;
    color: white;
    font-size: 2vh;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 15px 25px, rgba(0, 0, 0, 0.35) 0px 5px 10px;
    font-family: reem kufi, sans-serif;
  `

  const [movies, setMovies] = useState([])
  console.log("main users", users)
  const [reviews, setReviews] = useState([])
  const [movieTitle, setMovieTitle] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [foundMovies, setFoundMovies] = useState("");



  useEffect(() => {
    getMovies();
    getReviews();
  }, [])



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

  // const getMoviesByGenre = (genre) => {
  //   const request = new Request();
  //   if (genre === genre) {
  //     getMovies();
  //   }
  //   if (genre) {
  //     request.get("/api/movies/search/" + genre)
  //       .then((data) => {
  //         setMovies(data);
  //       });
  //   } else {
  //     getMovies();
  //   }
  // }

  const getMoviesByGenre = (genre) => {
    const request = new Request();
    if (genre === '') {
      getMovies();
    } else if (typeof genre === genre) {
      request.get("/api/movies/search/genre/${genre}")
        .then((data) => {
          setMovies(data);
        });
    } else {
      getMovies();
    }
  };




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

//   const getMovies = function () {

//   const allRequests = []
//   for (let i = 1; i <= 1000; i++){
//     const newFetch = fetch("http://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&page=" + i)
//     .then(response => response.json())
//     allRequests.push(newFetch)
//   }
//     Promise.all(allRequests)
//     .then((data) => saveToDb(data))

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

console.log("genres", genreIds)

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
  return <MovieDetail users={users} user={user} movie={foundMovie} addToWatchList={addToWatchList} reviews={reviews} genres={genreIds}/>
}


const movieDisplay = movies.map((movie, index) => {
  return <li key={index}><MovieCard movie={movie} findMovieById={findMovieById} genres={genreIds}/></li>
})

const movieSearchDisplay = movies.map((movie, index) => {
  return <MovieSearchCard key={index} movie={movie} />
})


return (
  <div>
    <div>
      <Router>
        <NavBar handleLogout={handleLogout} setSearchInput={setSearchInput} />
        <LiveSearch getMovieByTitle={getMovieByTitle} searchInput={searchInput} setSearchInput={setSearchInput} />
        <GenreFilter getMoviesByGenre={getMoviesByGenre} searchInput={searchInput} setSearchInput={setSearchInput} />
        <Routes>

          <Route path="/" element={movieDisplay} />
          <Route path="/movies/:id" element={<MovieDetailWrapper />} />
          <Route path="/profile" element={<ProfileCard key={user.id} user={user} handleDelete={handleDelete} reviews={reviews} movies={movies} MovieDetailWrapper={MovieDetailWrapper} getReviews={getReviews} />} />



        </Routes>
      </Router>
    </div>

    {/* <Footer>A.H.E.C. ltd</Footer> */}
    <ul>
    </ul>
  </div>
);
              }
    


export default MainContainer;