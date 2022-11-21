import React from "react";
import PropTypes from 'prop-types';
import { Icon } from "../Icon/Icon";

export const Burger = ({ onClick }) => {
    return (
        <div onClick={onClick} className="px-4 cursor-pointer" id="burger">
            <Icon icon="hamburger" />
        </div>
    )
};

Burger.propTypes = {
    onClick: PropTypes.func,
};