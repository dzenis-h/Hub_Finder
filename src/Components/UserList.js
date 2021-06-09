import React, { useContext } from 'react';
import { UsersContext } from '../store/users-context';
import UserItem from './UserItem';
import classes from './UserList.module.css';
import Spinner from '../Layout/Spinner';

function UserList(props) {
  const { users, loading } = useContext(UsersContext);

  const list = users.map((user) => <UserItem key={user.id} user={user} />);

  if (loading) return <Spinner />;

  return (
    <div>
      {users.length !== 0 ? (
        <ul className={classes.list}>{list}</ul>
      ) : (
        <p className={classes.empty}>Start searching for users.</p>
      )}
    </div>
  );
}

export default UserList;
