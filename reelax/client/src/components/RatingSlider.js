import React from 'react';

const RatingSlider = ({ ratingRange, setRatingRange }) => {
  const handleChange = (event) => {
    setRatingRange({ ...ratingRange, [event.target.name]: Number(event.target.value) });
  };

  return (
    <div>
      <input
        type="range"
        min="0.0"
        max="10.0"
        value={ratingRange.min}
        name="min"
        onChange={handleChange}
      />
      <input
        type="range"
        min="0.0"
        max="10.0"
        value={ratingRange.max}
        name="max"
        onChange={handleChange}
      />
      <div>Range: {ratingRange.min} - {ratingRange.max}</div>
    </div>
  );
}

export default RatingSlider;

