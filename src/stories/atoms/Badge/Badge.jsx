import React from 'react';
import PropTypes from 'prop-types';
import "./badge.css";
import { Icon } from '../Icon/Icon';

export const Badge = ({ backgroundColor, label, size, ...props}) => {

  const badgeSize = {
    small: "p-2",
    medium: "p-3",
  };
 
  return (
    <div
      className={`badge ${badgeSize[size]}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <Icon icon="clock"/>
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
