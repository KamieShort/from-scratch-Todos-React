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
    history.push('/');
  };

  return (
    <div className="header ">
      <NavLink className="nav" exact to="/">
        Home
      </NavLink>

      {/* {currentUser ? ( */}
      <button className="nav" onClick={logoutClick}>
        Logout
      </button>
      {/* ) : ( */}
      {/* <NavLink className="nav" exact to="/auth">
        Sign-In
      </NavLink> */}
      {/* )} */}
    </div>
  );
}
