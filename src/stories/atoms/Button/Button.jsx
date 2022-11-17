import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, size, label, ...props }) => {
 
  const primaryMode = 'text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
  const secondaryMode = 'bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300';
  const mode = primary ? primaryMode : secondaryMode;

  const btnSize = {
    small: "py-1 px-2 text-xs",
    medium: "py-2 px-3 text-xs",
    large: "py-3 px-4 text-s"
  };
  
  return (
    <button
      type="button"
      className={`btn ${mode} ${btnSize[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: 'small',
  onClick: undefined,
};
