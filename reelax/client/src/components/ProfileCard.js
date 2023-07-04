import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';
import placeholder from '../placeholder.jpg';
import pedro from '../pedro.jpeg';




const ProfileCard = ({user, handleLogout, getMovies, handleDelete, reviews, movies, MovieDetailWrapper, getReviews}) => {
    

    const [buttonClicked, setButtonClicked] = useState([false])
    const [randomImage, setRandomImage] = useState([])

    useEffect(() => {
      getReviews()
      getRandomImage()
    }, [])

    const onDelete = () => {
      handleDelete(user.id);
     
    }

    const handleClick1 = () => {
        setButtonClicked(!buttonClicked)
    }

    let movieList = []
    if(reviews.length > 0 && movies.length > 0){

        let newReviews = []
        console.log("reviews", reviews);
        for (let review of reviews){
            console.log("review", review);
            if (review.user_id === user.id){
                newReviews.push(review)
            }
        }
        console.log("newReviews", newReviews);
        let watchListMovies=[]
        for (let review2 of newReviews){
            console.log("review2", review2);
            for(let movie of movies){

                if(movie.id == review2.movie_id){
                    watchListMovies.push(movie)
                }
            }
        }
        console.log("watchList movies", watchListMovies);

        movieList = watchListMovies.map((movie, index) => {
        console.log("map called", index);
        return <li className='listItem' key={index}>
            <Link to={"/movies/" + movie.id} element={MovieDetailWrapper}><img id="poster" 
                src={"https://image.tmdb.org/t/p/original"+movie.poster} 
                width={250} height={300}alt="poster"/>
            <b><p>{movie.title}</p></b></Link></li>
    })
}

    let userMovies = movies
    console.log("user movies", userMovies);
    const getRandomImage = () => {
        if (userMovies.length > 0){
            let randomIndex = Math.floor(Math.random() * userMovies.length)
            setRandomImage(userMovies[randomIndex])
        }
    }

    console.log("rando", randomImage);


    return ( 
        <div className='container'>
            <div id='imgContainer'>
                <img className='background-img' src={pedro} alt="pedro"/>
            </div>
        <div className='profile-info'>
        <img className='profilePic' src={placeholder} alt="profile picture"/>
        <h1 className='header'>Hello</h1> 
        <h1>{user.username}</h1>
        </div>
        <div>
        <button onClick={handleClick1}className='watchlist-btn'>Watch List</button>
        </div>

        {buttonClicked? <ul className='movieGrid'>
            {movieList}
        </ul> : null}

        <Link to="/"><button className='deleteButton' onClick={onDelete}>Delete Account</button></Link>
        </div>
     );
}
 
export default ProfileCard;