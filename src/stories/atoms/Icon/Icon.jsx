import React from "react";
import PropTypes from 'prop-types';
import {icons} from "../../assets/icons"

export const Icon = ({ icon, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" {...props}>
            <path stroke-linecap="round" stroke-linejoin="round" d={icons[icon]} />
        </svg>
    )
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};