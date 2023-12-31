import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';


const MovieCard = ({movie, findMovieById}) => {

    const MovieDetailWrapper = () => {
        const {id} = useParams()
        let foundMovie = findMovieById(id)
        return <MovieDetail movie={foundMovie}/>
    }


    const url = "/movies/" + movie.id;

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