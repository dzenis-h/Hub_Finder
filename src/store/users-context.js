import { createContext, useState } from 'react';
import axios from 'axios';

export const UsersContext = createContext({
  users: [],
  getUsers: (value) => {},
  singleUser: {},
  getSingleUser: (username) => {},
  getUserRepos: (username) => {},
  repos: [],
});

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUsers = async (value) => {
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`
    );
    setUsers(data.items);
  };

  const getSingleUser = async (username) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`
    );
    setSingleUser(data);
  };

  const getUserRepos = async (username) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`
    );
    setRepos(data);
  };

  const ctx = {
    users,
    singleUser,
    getUsers,
    getSingleUser,
    getUserRepos,
    repos,
  };

  return (
    <UsersContext.Provider value={ctx}>{props.children}</UsersContext.Provider>
  );
};
