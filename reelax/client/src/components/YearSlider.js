import React from 'react';

const YearSlider = ({ yearRange, setYearRange }) => {
  const handleChange = (event) => {
    setYearRange({ ...yearRange, [event.target.name]: Number(event.target.value) });
  };

  return (
    <div>
      <input
        type="range"
        min="2000"
        max="2023"
        value={yearRange.min}
        name="min"
        onChange={handleChange}
      />
      <input
        type="range"
        min="2000"
        max="2023"
        value={yearRange.max}
        name="max"
        onChange={handleChange}
      />
      <div>Range: {yearRange.min} - {yearRange.max}</div>
    </div>
  );
}

export default YearSlider;
