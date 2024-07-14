import React from 'react';
import PropTypes from 'prop-types';

const CircularProgressBar = ({ percentage }) => {
  const radius = 100;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center p-5">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="lightgray"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#fea004
          
          "
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-stroke-dashoffset duration-500 ease-out"
        />
      </svg>
      <div className="absolute flex items-center justify-center">
        <span className="text-2xl">{percentage}%</span>
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgressBar;