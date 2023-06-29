import React from 'react';




const ProfileCard = ({user, getMovies}) => {
    

    // const seenMovies = user.movies.map((user, index) => {
    //     return <li key={index}>{user.movies} </li>
    //   })
    

    return ( 
        <div>
       
        <h1>Hello @{user.username}</h1>
        
        profilePicture
        <h3>@{user.username}</h3>
        <p>user profile</p>

        <button className='watchlist-btn'>Watch List</button>
        <button className="watched-btn">Watched List</button>

        {/* {selectedWatchList? getMovies(seenMovies): getMovies(watchListMovies)} */}
        </div>
     );
}
 
export default ProfileCard;