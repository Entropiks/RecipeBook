import './App.css'
import './firebase/config'
import Signup from './views/Signup'
import Profile from './views/Profile'
import Header from './components/Header';
import Login from './views/Login';
import Home from './views/Home';
// import ProfileRedirect from './router/ProfileRedirect';

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { UserProvider } from './firebase/UserProvider';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
