import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Request from '../helpers/request';
import ReviewForm from './ReviewForm';
import pronoun from "../pronoun.jpg";
import pronounbd from "../pronounbd.jpg";



const MovieDetail = ({ users, movie, addToWatchList, user, reviews, genres }) => {

    let review_id = null
    for (let review of reviews) {
        if (review.movie_id === movie.id && review.user_id === user.id) {
            console.log(review.id);
            review_id = review.id
        }
    }

    let movieGenre = null
    for (let genre of genres) {
        if (genre.id === movie.genre) {
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

    const [buttonClicked, setButtonClicked] = useState(false)
    const [seeReviews, setSeeReviews] = useState(false)
    const [formData, setFormData] = useState({
        "id": review_id,
        "user_id": user.id,
        "movie_id": movie.id,
        "stars": 0,
        "review": "",
        "seen": true
    })

    const navigate = useNavigate()

    if (!movie) {
        return "Loading..."
    }

    const handleClick = () => {
        setButtonClicked(!buttonClicked)
    }

    const getReviews = () => {
        setSeeReviews(!seeReviews)
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
        for (let review of reviews) {
            if (review.user_id === user.id && review.movie_id === movie.id) {
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
    for (let review of reviews) {
        if (review.user_id !== user.id && review.movie_id !== movie.id) {
            watchListOptions = <button className='movie-detail-btns' onClick={onButtonClicked}>Add To Watch List</button>
        }
        else if (review.user_id === user.id && review.movie_id === movie.id) {
            watchListOptions = <button className='movie-detail-b' onClick={deleteReview}>Remove From Watch List</button>
        }
    }

    const movieReviewsList = []
    for (let movieReview of reviews) {
        if (movieReview.movie_id === movie.id) {
            movieReviewsList.push(movieReview)
        }
    }
    console.log(movieReviewsList);
    const movieReviews = movieReviewsList.map((review, index) => {
        return <li key={index}><h3>***Reelax User***</h3><h4>{review.stars}</h4><p>{review.review}</p></li>
    })
    console.log(movieReviews)





    return (
        <div className='movie-card-container'>

            {/* <img id="backdrop" src={"https://image.tmdb.org/t/p/original" + movie.backdrop} width={590} height={300} /> */}
            <h1 id='movie-card-h1'>{movie.title}</h1>
            <h3 id="movie-card-h3">{movieGenre} | {movie.release} | {movie.vote_average} rating</h3>

          
            {movie.title === "Pronoun" ? (
                    <img
                      id="backdrop"
                      src={pronounbd}
                      width={590}
                      height={300}
                      alt="pronounbd"
                    />
                  ) : (
                    <img
                      id="backdrop"
                      src={"https://image.tmdb.org/t/p/original" + movie.backdrop}
                      width={590}
                      height={300}
                      alt="pronounbd"
                    />
                  )}


            {/* <h1 id='movie-card-h1'>{movie.title}</h1>
            <h3 id="movie-card-h3">{movieGenre} | {movie.release}</h3> */}


            {movie.title === "Pronoun" ? (
                    <img
                      id="poster"
                      src={pronoun}
                      width={250}
                      height={300}
                      alt="pronoun"
                    />
                  ) : (
                    <img
                      id="poster"
                      src={"https://image.tmdb.org/t/p/original" + movie.poster}
                      width={250}
                      height={300}
                      alt="poster"
                    />
                  )}
                  
    

            {/* <img id="poster" src={"https://image.tmdb.org/t/p/original" + movie.poster} width={250} height={300} alt="poster" /> */}
            <p>Voter Average {movie.vote_average}</p>

            <p className='movie-overview'>{movie.overview}</p>
            <div className="btn-wrapper">
                {watchListOptions}
                <button className='movie-detail-btns' onClick={onButtonClicked}>Add To Watch List</button>
                <button className='movie-detail-btns' onClick={handleClick}>Create Review</button>
                {buttonClicked ?
                    <div className="review-section">
                        <form onSubmit={onSubmit}>

                            <div id="ratings-body">
                                <div id="rating-box">
                                    <header id="rating-box-header">How was the movie?</header>
                                    <div></div>
                                    <input id="user-input" type="number" name="stars" value={formData.stars} onChange={onChange} />
                                    <div className="stars">
                                        <input id="user-input" type="text" name="review" value={formData.review} onChange={onChange} />
                                        <input id="user-input" type="submit" value="Confirm" />
                                        <button className='movie-detail-btns' id="rating-button" onClick={handleClick}>Cancel Review</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    : null}
                <button className='movie-detail-btns' onClick={getReviews}>Reviews</button>
                {seeReviews ?
                    <div className="review-section">
                        <ul>
                            {movieReviews}
                        </ul>
                    </div>
                    : null}
            </div>
        </div>
    );

};

export default MovieDetail;