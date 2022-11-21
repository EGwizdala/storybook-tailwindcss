import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../../atoms/ListItem/ListItem';
import { Icon } from '../../atoms/Icon/Icon';

export const Drawer = ({ header, menuItems, onClick }) => {
    const [display, setDisplay] = useState('hidden');
    const ref = useRef(null);
    
    const list = menuItems.map(({ icon, title, active }) => <ListItem key={title} icon={icon} active={active} label={title} />)

    const handleClick = () => {
       if (ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('hidden') 
        } else {
            ref.current.classList.add('hidden')
        }
    }

    return (
        <aside className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 md:border-b border-gray-100 ">
                        <a href="/" class="text-sm sm:text-xl lg:text-blue-500 hover:text-gray-700">{header}</a>
                    </h1>
                    <div onClick={handleClick} className="px-4 cursor-pointer md:hidden" id="burger">
                        <Icon icon="hamburger" />
                    </div>
                </div>
                <ul ref={ref} className="text-sm mt-6 hidden md:block" id="menu">
                    {list}
                </ul>
            </nav>
        </aside>
    )
};

Drawer.prototype = {
    header: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired,
    onClick: PropTypes.func,
};
