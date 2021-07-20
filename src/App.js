import './App.css'
import './firebase/config'
import Signup from './views/Signup'
import Profile from './views/Profile'
import Header from './components/Header';
import Login from './views/Login';
import ProfileRedirect from './router/ProfileRedirect';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import { UserProvider } from './firebase/UserProvider';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Header />
        <Switch>
          <ProfileRedirect exact path="/signup" component={Signup} />
          <Route exact path="/profile/:id" component={Profile} />
          <ProfileRedirect exact path="/login" component={Login} />
          <Route exact path="/">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
