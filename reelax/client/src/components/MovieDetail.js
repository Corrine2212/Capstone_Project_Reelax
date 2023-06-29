import React from 'react';

const MovieDetail = ({movie, addToWatchList, user}) => {

    if(!movie){
        return "Loading..."
    }

    const reviews = movie.reviews.map((review, index) => {
        return <li key={index}>{review.stars}{review.review}</li>
    })

        const seen = () => {
        if (movie.seen === true){
            return <p>Would you like to leave a review?</p>
        }
        else {
            return <p>would you like to add this movie to your watch list</p>
        }
    }

    const onButtonClicked = (movie) => {
        user.movies.push(movie)
        addToWatchList(user)
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
            <ul>
                {reviews}
            </ul>
        </div>
     );
}
 
export default MovieDetail;