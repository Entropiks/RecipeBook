import React from 'react'
import { logout } from '../firebase/auth'
import { useHistory, Link } from 'react-router-dom'
import { useSession } from '../firebase/UserProvider'
import '../components/Header.css'

function Header() {
  const history = useHistory();
  const { user } = useSession();

  // Handling user logout from auth.js
  const logoutUser = async () => {
    await logout();
    history.push('/login');
  };

  return (
    <div className="header">
      <Link to="/"><h2 className="title">FLMR</h2></Link>
      {/* If  the user existing is true, lets show the the following elements */}
      {!! user && <button className="icon user"><i class="fas fa-user-circle">User</i></button> }
      {!! user && <button className="button logout" onClick={logoutUser}>Logout</button>}
      {/* If the user does not exist, make sure to show the signup link */}
      {! user && <Link to="/signup"><button className="button signup">Sign Up</button></Link>}
    </div>
  )
}

export default Header
