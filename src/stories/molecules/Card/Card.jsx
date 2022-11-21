import React from "react";
import PropTypes from 'prop-types';

import { Badge } from "../../atoms/Badge/Badge";

export const Card = ({ card, badgeSize }) => {
    return (
        <div className="bg-white rounded overflow-hidden w-full shadow-md relative hover:shadow-lg cursor-pointer">
            <div
                className='w-full h-32 sm:h-48 object-cover'
                style={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/${card.image}`
                    }}>
            </div>
            <div class="m-4">
                <span className="font-bold">{card.title}</span>
                <span className="block text-gray-500 text-sm">{card.subtitle}</span>
            </div>
            <Badge label={card.time} size={badgeSize}/>
        </div>
    )
};

Card.propTypes = {
    card: PropTypes.shape({}),
    size: PropTypes.oneOf(['small', 'medium']),
}

Card.defaultProps = {
    card: null,
    badgeSize: null,
}