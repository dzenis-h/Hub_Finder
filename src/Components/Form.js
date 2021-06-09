import React, { useContext, useState } from 'react';
import classes from './Form.module.css';
import { UsersContext } from '../store/users-context';

function Form(props) {
  const [value, setValue] = useState('');
  const { getUsers } = useContext(UsersContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value !== '') getUsers(value);
    setValue('');
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <input
        name="user"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default Form;
