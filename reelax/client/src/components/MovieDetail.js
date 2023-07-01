import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Request from '../helpers/request';
import ReviewForm from './ReviewForm';

const MovieDetail = ({movie, addToWatchList, user, reviews}) => {

    const [buttonClicked, setButtonClicked]= useState([false])
    const [formData, setFormData] = useState({
        "stars": 0,
        "review": "",
        "seen": true
    })

    const navigate = useNavigate()
    
    if(!movie){
        return "Loading..."
    }

    const handleClick = () => {
      setButtonClicked(!buttonClicked)
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

    const createMovieReview = (movieReview) => {
        let newReview = null
        for (let review of reviews){
            if (review.user_id === user.id && review.movie_id === movie.id){
                newReview = movieReview
                let id = review.id
                const request = new Request()
                request.patch('/api/reviews/' + id, newReview)
            }
        }
    }

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        let id = null
        for (let review of reviews){
            if (review.user_id === user.id && review.movie_id === movie.id){
                id = review.id
            }
        }
        createMovieReview(formData)
        setFormData({
            "id": id,
            "user_id": user.id,
            "movie_id": movie.id,
            "stars": 0,
            "review": "",
            "seen": true
        })
    }

    // let movieReviews = null
    //   for (let review of reviews){
    //     if (movie.id === review.movie_id){
    //         movieReviews = reviews.map((review, index) => {
    //             return <li key={index}>{review.review}</li>
    //         })
    //     }
    //   }

    let watchListOptions = null
      for (let review of reviews){
        if (review.user_id !== user.id && review.movie_id !== movie.id){
            watchListOptions = <button onClick={onButtonClicked}>Add To Watch List</button>
        }
        else if (review.user_id === user.id && review.movie_id === movie.id){
            watchListOptions = <button onClick={deleteReview}>Remove From Watch List</button>
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
                {watchListOptions}
                <button onClick={handleClick}>Create Review</button>
                {buttonClicked?
                    <form onSubmit={onSubmit}>
                        <div>
                        <b>{user.username}</b>
                        </div>
                        <b>{movie.title}</b>
                        {/* <b>{movie.id}</b> */}
                        <div>
                            <div>
                            <input type="number" name="stars" 
                            value={formData.stars} onChange={onChange}/>
                            </div>
                            <input type="text" name="review" 
                            value={formData.review} onChange={onChange}/>
                            <input type="submit" value="Confirm"/>
                        </div>
                    </form> : null}
                {/* <ul>
                    {movieReviews}
                </ul> */}
        </div>
     );
}
 
export default MovieDetail;