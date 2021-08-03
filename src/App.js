import './App.css'
import './firebase/config'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { UserProvider } from './firebase/UserProvider';
import Signup from './views/Signup'
import Profile from './views/Profile'
import Header from './components/Header';
import Login from './views/Login';
import Home from './views/Home';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <ProfileRedirect exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <ProfileRedirect exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
