import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/">
        <i className="fab fa-github-alt fa-2x" /> Hub_Finder
      </Link>
    </div>
  );
};

export default Header;
