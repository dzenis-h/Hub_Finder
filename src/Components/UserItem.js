import React from 'react';
import { Link } from 'react-router-dom';
import classes from './UserItem.module.css';

const UserItem = ({ user }) => {
  return (
    <div className={classes.item}>
      <h6>{user.login}</h6>
      <img src={user.avatar_url} alt={user.login} />
      <Link to={user.login} className={classes.more}>
        More
      </Link>
    </div>
  );
};

export default UserItem;
