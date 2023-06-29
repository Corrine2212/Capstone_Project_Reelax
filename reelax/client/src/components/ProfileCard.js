import React from 'react';
import { Link } from 'react-router-dom';




const ProfileCard = ({user, handleLogout, getMovies, handleDelete}) => {
    

    // const seenMovies = user.movies.map((user, index) => {
    //     return <li key={index}>{user.movies} </li>
    //   })

    const onDelete = () => {
      handleDelete(user.id);
     
    }


    return ( 
        <div>
       
        <h1>Hello @{user.username}</h1>
        
        profilePicture
        <h3>@{user.username}</h3>
        <p>user profile</p>

        <button className='watchlist-btn'>Watch List</button>
        <button className="watched-btn">Watched List</button>
        <Link to="/"><button onClick={onDelete}>Delete Account</button></Link>

        {/* {selectedWatchList? getMovies(seenMovies): getMovies(watchListMovies)} */}
        </div>
     );
}
 
export default ProfileCard;