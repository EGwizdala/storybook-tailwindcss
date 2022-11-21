import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { Icon } from '../Icon/Icon';

export const ListItem = ({ icon, label, activeColor, active, borderColor, setActive}) => {
    const markerColor = active ? `border-${activeColor}` : null;

    return (
        <li className="text-gray-700 py-1" onClick={setActive}>
            <a
                href="#"
                className={`px-4 flex justify-end border-r-4 ${markerColor}`}
                style={borderColor && { borderColor }}
            >
                <span>{label}</span>
                <div className="ml-2 w-6 h-6" >
                    <Icon icon={icon}/>
                </div>
            </a>
        </li>
    )
};

ListItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    activeColor: PropTypes.string,
    active: PropTypes.bool,
    borderColor: PropTypes.string,
    setActive: PropTypes.func
};

ListItem.defaultProps = {
    icon: null,
    label: "text",
    active: false,
    borderColor: null,
    activeColor: 'primary',
}