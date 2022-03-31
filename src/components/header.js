import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/users';
import './header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const history = useHistory();
  const logoutClick = async () => {
    await logout();
    setCurrentUser(null);
    history.push('/auth');
  };

  return (
    <div className="header ">
      <NavLink className="nav" exact to="/">
        Home
      </NavLink>
      {currentUser && (
        <button className="nav" onClick={logoutClick}>
          Logout
        </button>
      )}
      {!currentUser && (
        <NavLink className="nav" exact to="/auth">
          Sign-In
        </NavLink>
      )}
    </div>
  );
}
