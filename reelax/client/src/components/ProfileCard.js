import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';




const ProfileCard = ({user, handleLogout, getMovies, handleDelete, reviews, movies, MovieDetailWrapper, getReviews}) => {
    

    const [buttonClicked, setButtonClicked] = useState([false])

    useEffect(() => {
      getReviews()
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
        return <li key={index}>
            <Link to={"/movies/" + movie.id} element={MovieDetailWrapper}><img id="poster" 
                src={"https://image.tmdb.org/t/p/original"+movie.poster} 
                width={250} height={300}alt="poster"/>
            <p>{movie.title}</p></Link></li>
    })

    }



    return ( 
        <div className='container'>
       
        <h1>Hello @{user.username}</h1>
        
        profilePicture
        <h3>@{user.username}</h3>
        <p>user profile</p>
        <div>
        <button onClick={handleClick1}className='watchlist-btn'>Watch List</button>
        </div>

        {buttonClicked? <ul className='movieGrid'>
            {movieList}
        </ul> : null}

        <Link to="/"><button onClick={onDelete}>Delete Account</button></Link>
        </div>
     );
}
 
export default ProfileCard;