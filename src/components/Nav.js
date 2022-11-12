import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isActive, setIsActive] = useState(true);

  let location = useLocation();
  console.log(location);

  function clickLinkHome() {
    if (location.pathname === '/about') {
      setIsActive(!isActive);
    }

    console.log(isActive);
  }

  function clickLinkAbout() {
    if (location.pathname === '/') {
      setIsActive(!isActive);
    }
    console.log(isActive);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link
            onClick={clickLinkHome}
            className={isActive ? 'active' : ''}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={clickLinkAbout}
            className={!isActive ? 'active' : ''}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
