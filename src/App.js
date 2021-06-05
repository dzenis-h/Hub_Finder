import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UsersProvider } from './store/users-context';
import Header from './Layout/Header';
import Form from './Components/Form';
import UserList from './Components/UserList';
import SingleUser from './Components/SingleUser';

function App() {
  const Home = (
    <Fragment>
      <Form />
      <UserList />
    </Fragment>
  );

  return (
    <div className="App">
      <UsersProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => Home} />
            <Route exact path="/:login" component={SingleUser} />
          </Switch>
        </Router>
      </UsersProvider>
    </div>
  );
}

export default App;
