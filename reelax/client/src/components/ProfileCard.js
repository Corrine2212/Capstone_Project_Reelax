import React, {useState} from 'react';
import { Link } from 'react-router-dom';




const ProfileCard = ({user, handleLogout, getMovies, handleDelete, reviews, movies}) => {
    

    const [buttonClicked, setButtonClicked] = useState([false])

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
        return <li key={index}><p>{movie.title}</p><p>{movie.overview}</p></li>
    })

    }



    return ( 
        <div>
       
        <h1>Hello @{user.username}</h1>
        
        profilePicture
        <h3>@{user.username}</h3>
        <p>user profile</p>
        <div>
        <button onClick={handleClick1}className='watchlist-btn'>Watch List</button>
        </div>

        {buttonClicked? <ul>
            {movieList}
        </ul> : null}

        <Link to="/"><button onClick={onDelete}>Delete Account</button></Link>
        </div>
     );
}
 
export default ProfileCard;