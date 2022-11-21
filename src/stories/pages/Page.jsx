import React from 'react';
import PropTypes from 'prop-types';

import {menuItems} from '../assets/menuItems'
import { recepies } from '../assets/recepies';
import { Button } from '../atoms/Button/Button';
import { Card } from '../molecules/Card/Card';
import { Drawer } from '../molecules/Drawer/Drawer';
import { Navigation } from '../molecules/Navigation/Navigation';

export const Page = ({ onLogin, onLogout, onSignUp, user }) => {
  const cards = recepies.map(recepie => <Card key={recepie.title} card={recepie} badgeSize="small" />)
  return (
    <div className="grid md:grid-cols-3">
      <Drawer header="Food Ninja"  menuItems = {menuItems} />
    <main className="px-16 py-8 bg-gray-100 md:col-span-2">
      <Navigation user={user} onLogin={onLogin} onLogout={onLogout} onSignUp={onSignUp} />
      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>
      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
         {cards}
        </div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
        <div className="mt-8"> 
        </div>
      </div>
        <div className="flex justify-center">
          <Button label="Load more" size="medium" primary={false} />
      </div>    
    </main>
    </div>
  );
};

Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
