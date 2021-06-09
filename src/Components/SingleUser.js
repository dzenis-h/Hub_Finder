import React, { Fragment, useContext, useEffect } from 'react';
import { UsersContext } from '../store/users-context';
import Card from '../Layout/Card';
import Spinner from '../Layout/Spinner';
import classes from './SingleUser.module.css';
import { Link } from 'react-router-dom';

const SingleUser = (props) => {
  const { getSingleUser, singleUser, getUserRepos, repos, loading } =
    useContext(UsersContext);

  const { login } = props.match.params;

  useEffect(() => {
    getSingleUser(login);
    getUserRepos(login);
  }, [login, getSingleUser, getUserRepos]);

  const displayRepos = repos.map((r) => {
    return (
      <li key={r.id}>
        {' '}
        <b>Name: </b>
        <a href={r.html_url} rel="noopener noreferrer" target="_blank">
          {r.name}
        </a>
        <p>
          <b>Description:</b> {r.description}
        </p>
        <hr />
      </li>
    );
  });

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className={classes.back}>
        Go back
      </Link>
      {singleUser && (
        <div className={classes.singleUser}>
          <div>
            <img src={singleUser.avatar_url} alt={singleUser.name} />

            <p>
              <b>Name: </b> {singleUser.name}
            </p>
            <p>
              <b>Username: </b> {singleUser.login}
            </p>
            <p>
              <b>Public Repos: </b>
              {singleUser.public_repos}
            </p>
            <p>
              <b>Link: </b>
              <a
                href={singleUser.html_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {singleUser.login}
              </a>
            </p>
            <p>
              <b>Followers: </b> {singleUser.followers}
            </p>
            <p>
              <b>Following: </b> {singleUser.following}
            </p>
            <p className={classes.bio}>
              <b>Bio: </b>
              {singleUser.bio}
            </p>
          </div>
          {/* ------------------------------------- */}
          <div>
            <Card>
              <h3>Most recent repos:</h3>
              <ul>{displayRepos}</ul>
            </Card>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SingleUser;
