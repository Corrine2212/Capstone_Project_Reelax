import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';


const MovieCard = ({movie, findMovieById, genres}) => {

    const MovieDetailWrapper = () => {
        const {id} = useParams()
        let foundMovie = findMovieById(id)
        return <MovieDetail movie={foundMovie}/>
    }


    const url = "/movies/" + movie.id;

    let movieGenre = null
    for (let genre of genres){
        if (genre.id === movie.genre){
            movieGenre = genre.name
        }
    }

    return ( 
        <div>
            <Link to={url} element={<MovieDetailWrapper/>}>
                <img id="poster" 
                src={"https://image.tmdb.org/t/p/original"+movie.poster} 
                width={250} height={300}alt="poster"/>
            </Link>
        </div>
     );
}
 
export default MovieCard;