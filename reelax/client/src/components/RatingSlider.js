import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const RatingSlider = ({ ratingRange, setRatingRange }) => {
  const handleSliderChange = (newValues) => {
    setRatingRange({ min: newValues[0], max: newValues[1] });
  };

  return (
    <div>
      <h2 className="year-filter-title">Filter by ratings:</h2>
      <div className="slider-container">
        <Slider
          className="rating-slider"
          min={0.0}
          max={10.0}
          value={[ratingRange.min, ratingRange.max]}
          onChange={handleSliderChange}
          range
          handleStyle={{
            borderColor: 'orange',
            backgroundColor: 'white',
          }}
          trackStyle={{ backgroundColor: 'orange', }}
        />
      </div>
      <div>Range: {ratingRange.min} - {ratingRange.max}</div>
    </div>
  );
};

export default RatingSlider;