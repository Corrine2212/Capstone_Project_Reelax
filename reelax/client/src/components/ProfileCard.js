import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';
import placeholder from '../placeholder.jpg';
import pedro from '../pedro.jpeg';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import styled from 'styled-components';
import pronoun from '../pronoun.jpg';
import callum from "../callum.jpg";
import defaultprofile from "../defaultprofile.jpeg";


const ProfileCard = ({ user, handleLogout, getMovies, handleDelete, reviews, movies, MovieDetailWrapper, getReviews }) => {

    const StyledLogoutIcon = styled(LogOut)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    color: red;
    text-align: center;
    &:hover {
  text-decoration: underline;
}
  `;

    const StyledProfileLink = styled(Link)`
    color: red;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

&:hover {
  text-decoration: underline;
}
`;


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
    if (reviews.length > 0 && movies.length > 0) {

        let newReviews = []
        console.log("reviews", reviews);
        for (let review of reviews) {
            console.log("review", review);
            if (review.user_id === user.id) {
                newReviews.push(review)
            }
        }
        console.log("newReviews", newReviews);
        let watchListMovies = []
        for (let review2 of newReviews) {
            console.log("review2", review2);
            for (let movie of movies) {

                if (movie.id == review2.movie_id) {
                    watchListMovies.push(movie)
                }
            }
        }
        console.log("watchList movies", watchListMovies);

        // movieList = watchListMovies.map((movie, index) => {
        //     console.log("map called", index);
        //     return <li className='listItem' key={index}>
        //         <Link to={"/movies/" + movie.id} element={MovieDetailWrapper}><img id="Watch-list-poster"/>
        //             {/* // src={"https://image.tmdb.org/t/p/original" + movie.poster} 
        //             // width={250} height={300} alt="poster" /> */}
        //             {/* <b><p>{movie.title}</p></b> */}
        //         </Link>
        //         </li>
        // }
        // )
        movieList = watchListMovies.map((movie, index) => {
            console.log("map called", index);
            return (
                <li className='listItem' key={index}>
                    <Link to={"/movies/" + movie.id} element={MovieDetailWrapper}>
                        {movie.title === "Pronoun" ? (
                            <img
                                id="Watch-list-poster"
                                src={pronoun}
                                // width={250}
                                // height={300}
                                alt="pronouns"
                            />
                        ) : (
                            <img
                                id="Watch-list-poster"
                                src={"https://image.tmdb.org/t/p/original" + movie.poster}
                                // width={250}
                                // height={300}
                                alt="poster"
                            />
                        )}
                        {/* <b><p>{movie.title}</p></b> */}
                    </Link>
                </li>
            );
        });

    }

    let userMovies = movies
    console.log("user movies", userMovies);
    const getRandomImage = () => {
        if (userMovies.length > 0) {
            let randomIndex = Math.floor(Math.random() * userMovies.length)
            setRandomImage(userMovies[randomIndex])
        }
    }

    console.log("rando", randomImage);


    return (
        <div className='profile-container'>
            <div id='imgContainer'>
                <img className='background-img' src={pedro} alt="pedro" />
            </div>
            <div className='profile-info'>
                {user.username === "Callum" ? (
                    <img className='profilePic'
                        src={callum}
                        width={60}
                        height={60}
                        alt="profile-picture"
                    />
                ) : user.username === "Scott" ? (
                    <img className='profilePic'
                        src={placeholder}
                        width={60}
                        height={60}
                        alt="profile-picture"
                    />
                ) : (
                    <img className='profilePic'
                        src={defaultprofile}
                        width={60}
                        height={60}
                        alt="profile-picture"
                    />
                )}
            </div>
            <h1 className='header'>Hello {user.username} </h1>
            <h4>@ScottH <span>pro/noun</span></h4>
            <p>Films and such</p>
     

                <button onClick={handleClick1} className='watchlist-btn'>Watch List</button>
        

            {buttonClicked ? <ul className='movieGrid'>
                {movieList}
            </ul> : null}

            <div className="delete-logout-wrapper">
                <Link to="/"><button className='deleteButton' onClick={onDelete}>Delete Account</button></Link>
                <StyledProfileLink to="/" onClick={handleLogout}>
                    <StyledLogoutIcon>Log Out</StyledLogoutIcon>
                    <p>Logout</p>
                </StyledProfileLink>
            </div>
        </div>


    );
}

export default ProfileCard;