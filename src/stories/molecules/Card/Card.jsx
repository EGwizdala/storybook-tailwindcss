import React from "react";
import PropTypes from 'prop-types';

import { Badge } from "../../atoms/Badge/Badge";

export const Card = ({ image, bagde, title, subtitle }) => {
    return (
        <div class="card">
            {/* <img src="img/stew.jpg" alt="stew" class="w-full h-32 sm:h-48 object-cover"> */}
            <div class="m-4">
                <span class="font-bold">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25 mins</span>
            </div>
        </div>
    )
};