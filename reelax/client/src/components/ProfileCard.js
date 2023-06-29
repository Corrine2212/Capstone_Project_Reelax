import React from 'react';



const ProfileCard = (user) => {

    return ( 
        <>
        <h1>Hello @{user.username}</h1>

        <h3>@{user.username}</h3>
        <p>user profile</p>

        <button className='watchlist-btn'></button>
        <button className="watched-btn"></button>

        </>
     );
}
 
export default ProfileCard;