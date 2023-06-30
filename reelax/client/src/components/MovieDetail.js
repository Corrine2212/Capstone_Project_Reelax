import React from 'react';
import Request from '../helpers/request';

const MovieDetail = ({movie, addToWatchList, user, reviews}) => {

    if(!movie){
        return "Loading..."
    }



        const seen = () => {
        if (movie.seen === true){
            return <p>Would you like to leave a review?</p>
        }
        else {
            return <p>would you like to add this movie to your watch list</p>
        }
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

       // user.movies.push(movie)
        // addToWatchList(user)
    }

    const deleteReview = (id) => {
        console.log("deleted")
        for (let review of reviews){
            if (review.user_id === user.id && review.movie_id === movie.id){
                let request = new Request()
                request.delete("/api/reviews/" + review.id)
            }
        }
    }



    return ( 
        <div>
            <h1>
                {movie.title}
            </h1>
            <img id="poster" 
                src={"https://image.tmdb.org/t/p/original"+movie.poster} 
                width={250} height={300}alt="poster"/>
                <p>{movie.overview}</p>
                <p>{seen()}</p>
                <button onClick={onButtonClicked}>Add To Watch List</button>
                <button onClick={deleteReview}>Remove From Watch List</button>
            <ul>

            </ul>
        </div>
     );
}
 
export default MovieDetail;