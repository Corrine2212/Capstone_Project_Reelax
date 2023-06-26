import React, {useState, useEffect} from 'react'
import Request from '../helpers/request'

const MainContainer = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
      getMovies();
    }, [])
    
    
    const getMovies = function () {
    

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTJmOTk5MTUyNzFhZmI3NGQxZmJmZjQxMDI2ZWI0YyIsInN1YiI6IjY0OTVhMDU1ODgwNTUxMDBlNzQ0N2FjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lFaWCPsXKZFT5aaHoRbNYKgyNEhOsVtu1AHUUZGVZ1g'
            }
          };
          const allRequests = []
          for (let i = 1; i <= 20; i++){
            const newFetch = fetch("http://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&page=" + i, options)
            .then(response => response.json())
            allRequests.push(newFetch)
          }
            Promise.all(allRequests)
            .then((data) => saveToDb(data))
    
    }

    const saveToDb =(data) =>{
      for(let result of data){
        for(let movie of result){
          let newMovie = {
            "title": movie.title,
            "poster": movie.poster_path,
            "genre": movie.genre,
            "release": movie.release,
            "seen": movie.seen,
            "reviews": movie.reviews
          }
          Request.post("localhost:8080/api/movies", newMovie)
        }
      }

    }

    const movieDisplay = movies.map((movie, index) => {
        return <li key={index}>{movie.budget}</li>
    })
    
    
    return ( 
        <div>
            <ul>
                {movieDisplay}
            </ul>
        </div>
     );
}
 
export default MainContainer;