import React from "react";
import PropTypes from 'prop-types';

import {ReactComponent as AboutLogo} from '../../assets/about.svg';
import { ReactComponent as ContactLogo } from '../../assets/contact.svg';
import {ReactComponent as HomeLogo} from '../../assets/home.svg';

export const ListItem = ({ icon, label, activeColor, active, borderColor}) => {

    const markerColor = active ? `border-${activeColor}` : null;

    return (
        <li className="text-gray-700 py-1">
            <a
                href="#"
                className={`px-4 flex justify-end border-r-4 ${markerColor}`}
                style={borderColor && { borderColor }}
            >
                <span>{label}</span>
                <div className="ml-2 w-6 h-6" >
                    {icon}
                </div>
            </a>
        </li>
    )
};

ListItem.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    activeColor: PropTypes.string,
    active: PropTypes.bool,
    borderColor: PropTypes.string
};

ListItem.defaultProps = {
    icon: null,
    label: "text",
    active: false,
    borderColor: null,
    activeColor: 'primary',
}