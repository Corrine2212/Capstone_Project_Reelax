import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const LiveSearch = ({getMovieByTitle, setSearchInput}) => {

  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setInput(''); // clear input on location change
    setSearchInput(''); // also clear the input in the parent component state
    getMovieByTitle('');
  }, [location]); 

  const handleChange = event => {
    setInput(event.target.value);
    setSearchInput(event.target.value);
    getMovieByTitle(event.target.value);
   
  }
 

  return (
    <input type="text" onChange={handleChange} value={input} placeholder="Search for a movie..." />
  )
}

export default LiveSearch;


  
