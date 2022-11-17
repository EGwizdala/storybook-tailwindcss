import React from 'react';
import PropTypes from 'prop-types';
import "./badge.css"


export const Badge = ({ backgroundColor, label, size }) => {

  const badgeSize = {
    small: "p-2",
    medium: "p-3",
  };
 
  return (
    <div
      className={`badge ${badgeSize[size]}`}
      style={backgroundColor && { backgroundColor }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{label}</span>
    </div>
  );
};

Badge.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

Badge.defaultProps = {
  backgroundColor: null,
  size: 'medium',
};
