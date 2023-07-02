import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Request from '../helpers/request';
import ReviewForm from './ReviewForm';

const MovieDetail = ({movie, addToWatchList, user, reviews, genres}) => {

    let review_id = null
    for (let review of reviews){
        if (review.movie_id === movie.id && review.user_id === user.id){
            console.log(review.id);
            review_id = review.id
        }
    }

    let movieGenre = null
    for (let genre of genres){
        if (genre.id === movie.genre){
            movieGenre = genre.name
        }
    } 

    console.log("review id", review_id);
    // console.log("movie detail users", users)
    // let user_names = []
    // for (let movieUser of users){
    //     for (let review of reviews){
    //         if (movieUser.id === review.user_id){
    //             user_names.push(movieUser)
    //         }
    //     }
    // }
    // console.log("users id", user_names);

    const [buttonClicked, setButtonClicked]= useState([false])
    const [formData, setFormData] = useState({
        "id": review_id,
        "user_id": user.id,
        "movie_id": movie.id,
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
                console.log(review.id);
                request.delete("/api/reviews/" + review.id)
            }
        }
        navigate("/profile")
    }

    const createMovieReview = (movieReview) => {
                const request = new Request()
                request.patch('/api/reviews/' + review_id, movieReview)
                console.log(movieReview);
    }

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // for (let review of reviews){
        //     if (review.user_id === user.id && review.movie_id === movie.id){
                createMovieReview(formData)
                console.log("form data", formData);
                console.log("review id", review_id);
                setFormData({
                    "id": review_id,
                    "user_id": user.id,
                    "movie_id": movie.id,
                    "stars": 0,
                    "review": "",
                    "seen": true
                })
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

    const movieReviewsList = []
    for ( let movieReview of reviews){
        if (movieReview.movie_id === movie.id){
            movieReviewsList.push(movieReview)
        }
    }
    console.log(movieReviewsList);
    const movieReviews = movieReviewsList.map((review, index) => {
        return <li key={index}><h3>Reelax User</h3><h4>{review.stars}</h4><p>{review.review}</p></li>
    })
    console.log(movieReviews)

    
    
    
    return ( 
        <div>
            <h1>
                {movie.title}
            </h1>
            <h3>{movieGenre}</h3>
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
                <ul>
                    {movieReviews}
                </ul>
        </div>
     );
}
 
export default MovieDetail;