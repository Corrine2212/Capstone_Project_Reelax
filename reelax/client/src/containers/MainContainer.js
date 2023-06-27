import React, {useState, useEffect} from 'react'
import Request from '../helpers/request'

const MainContainer = () => {

    const baseURL = "/api/users"
    const [movies, setMovies] = useState([])
    const [users, setUsers] = useState([])
    const [reviews, setReviews] = useState([])


    useEffect(() => {
      getMovies();
      getUsers();
      getReviews();
     
    }, [])
    

    const getUsers = () => {
      return fetch(baseURL)
          .then(res => res.json())
          .then(data => setUsers(data))


  }

  const getMovies= () => {
    const request= new Request()
    request.get("/api/movies")
    .then((data) => {
      setMovies(data)
    })
  }


  const getReviews= () => {
    const request= new Request()
    request.get("/api/reviews")
    .then((data) => {
      setReviews(data)
    })
  }


  // const addUser = (user) => {
  //   setUsers([...users, user])

  // }
    
    // const getMovies = function () {
    

    //     // const options = {
    //     //     method: 'GET',
    //     //     headers: {
    //     //       accept: 'application/json',
    //     //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTJmOTk5MTUyNzFhZmI3NGQxZmJmZjQxMDI2ZWI0YyIsInN1YiI6IjY0OTVhMDU1ODgwNTUxMDBlNzQ0N2FjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lFaWCPsXKZFT5aaHoRbNYKgyNEhOsVtu1AHUUZGVZ1g'
    //     //     }
    //     //   };
    //       const allRequests = []
    //       for (let i = 1; i <= 2; i++){
    //         const newFetch = fetch("http://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&page=" + i)
    //         .then(response => response.json())
    //         allRequests.push(newFetch)
    //       }
    //         Promise.all(allRequests)
    //         .then((data) => saveToDb(data))
    
    // }

    // const saveToDb =(data) =>{
    //   for(let result of data){

    //     for(let movie of result.results){
    //       let newMovie = {
    //         "title": movie.title,
    //         "poster": movie.poster_path,
    //         "genre": 1,
    //         "release": movie.release_date,
    //         "seen": false,
    //         "reviews": [],
    //         "user": {"id":2, "username":"UserTwo","email":"4321@gmail.com","password":"4321"}
    //       }
          
    //       console.log(newMovie);
    //       let request = new Request()
    //     request.post("/api/movies", newMovie)
    //     }
    //   }

    // }

    const movieDisplay = movies.map((movie, index) => {
        return <li key={index}>{movie.title} <img id="poster" src={"https://image.tmdb.org/t/p/original"+movie.poster} alt="poster"/> </li>
    })

    const userDisplay = users.map((user, index) => {
      return <li key={index}>{user.username} {reviews.reviews}</li>
    })

    const reviewDisplay = reviews.map((review, index) => {
    return <li key={index}>{review.review} </li>
    })
    
    
    return ( 
        <div>
            <ul>

              <p>this is a movie container</p>
                {movieDisplay} 
                {/* {userDisplay}
                {reviewDisplay} */}
            </ul>
        </div>
     );
}
 
export default MainContainer;