import React, { useContext } from 'react';
import { UsersContext } from '../store/users-context';
import UserItem from './UserItem';
import classes from './UserList.module.css';

function UserList(props) {
  const ctx = useContext(UsersContext);

  const list = ctx.users.map((user) => <UserItem key={user.id} user={user} />);

  return (
    <div>
      <ul className={classes.list}>{list}</ul>
    </div>
  );
}

export default UserList;
