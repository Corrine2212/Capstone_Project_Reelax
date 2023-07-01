import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Request from '../helpers/request';

const MovieDetail = ({movie, addToWatchList, user, reviews}) => {

    const navigate = useNavigate()
    
    if(!movie){
        return "Loading..."
    }
    
    const onButtonClicked = (event) => {
        console.log("movie user", user);
        console.log("movie movie", movie);
        let newReview = {
            "user_id": user.id,
            "movie_id": movie.id,
            "stars": 0,
            "review": "",
            "seen": false
        }
        let request = new Request()
        request.post("/api/reviews", newReview)
        navigate("/movies/" + movie.id)
    }
    
    const deleteReview = () => {
        console.log("deleted")
        for (let review of reviews){
            if (review.user_id === user.id && review.movie_id === movie.id){
                let request = new Request()
                request.delete("/api/reviews/" + review.id)
            }
        }
        navigate("/profile")
    }

    let watchListOptions = null
      for (let review of reviews){
        if (review.user_id !== user.id && review.movie_id !== movie.id){
            watchListOptions = <button onClick={onButtonClicked}>Add To Watch List</button>
        }
        else if (review.user_id === user.id && review.movie_id === movie.id){
            watchListOptions = <button onClick={deleteReview}>Remove From Watch List</button>
        }
      }

    // const getMovieReview = () => {
    //   for (let review of reviews){
    //     if (review.movie_id === movie.id){
    //     return <p>{review.review}</p>
    //     }
    //   }
    // }
    
    
    
    return ( 
        <div>
            <h1>
                {movie.title}
            </h1>
            <img id="poster" 
                src={"https://image.tmdb.org/t/p/original"+movie.poster} 
                width={250} height={300}alt="poster"/>
                <p>{movie.overview}</p>
                {watchListOptions}
                {/* <button onClick={getMovieReview}>Reviews</button> */}
        </div>
     );
}
 
export default MovieDetail;