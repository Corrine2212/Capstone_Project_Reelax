import React from 'react';


const MovieCard = ({movie}) => {
    return ( 
        <div>
            <img id="poster" src={"https://image.tmdb.org/t/p/original"+movie.poster} width={250} height={300}alt="poster"/>
        </div>
     );
}
 
export default MovieCard;