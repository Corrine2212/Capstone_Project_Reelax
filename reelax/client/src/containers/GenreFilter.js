import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const GenreFilter = ({getMoviesByGenre, setSearchInput}) => {

  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setInput(''); // clear input on location change
    setSearchInput(''); // also clear the input in the parent component state
    getMoviesByGenre('');
  }, [location]); 

  const handleChange = event => {
    setInput(event.target.value);
    setSearchInput(event.target.value);
    getMoviesByGenre(event.target.value);
   
  }
 

  return (
    <input type="text" onChange={handleChange} value={input} placeholder="know the genre..." />
  )
}

export default GenreFilter;
  
    
  