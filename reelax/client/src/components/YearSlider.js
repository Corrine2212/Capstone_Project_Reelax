import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const YearSlider = ({ yearRange, setYearRange }) => {
  const handleSliderChange = (newValues) => {
    setYearRange({ min: newValues[0], max: newValues[1] });
  };



  return (
    <div>
      <h2 className="year-filter-title">Filter by year:</h2>
      <div className="slider-container">
        <Slider
          className='year-slider'
          min={2000}
          max={2023}
          value={[yearRange.min, yearRange.max]}
          onChange={handleSliderChange}
          range
          handleStyle={{
            borderColor: 'orange',
            backgroundColor: 'white',
          }}
          trackStyle={{ backgroundColor: 'orange', }}
        />
      </div>
      <div>Range: {yearRange.min} - {yearRange.max}</div>
    </div>
  );
}

export default YearSlider;
