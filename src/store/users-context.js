import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const UsersContext = createContext({
  users: [],
  singleUser: {},
  repos: [],
  loading: false,
  getUsers: (value) => {},
  getSingleUser: (username) => {},
  getUserRepos: (username) => {},
});

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = useCallback(async (value) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`
    );
    setUsers(data.items);
    setLoading(false);
  }, []);

  const getSingleUser = useCallback(async (username) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`
    );
    setSingleUser(data);
    setLoading(false);
  }, []);

  const getUserRepos = useCallback(async (username) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`
    );
    setRepos(data);
    setLoading(false);
  }, []);

  const ctx = {
    users,
    singleUser,
    getUsers,
    getSingleUser,
    getUserRepos,
    repos,
    loading,
  };

  return (
    <UsersContext.Provider value={ctx}>{props.children}</UsersContext.Provider>
  );
};
