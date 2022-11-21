import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button/Button';

export const Navigation = ({ user, onLogin, onLogout, onSignUp }) => {
  return (
    <nav className="flex justify-center md:justify-end gap-x-2">
        {user ? (
          <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button primary size="small" onClick={onSignUp} label="Sign up" />
            </>
         )}
    </nav>
  )};

Navigation.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  user: null,
};
