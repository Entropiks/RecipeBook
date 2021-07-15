import React from 'react'
import { logout } from '../firebase/auth'
import { useHistory } from 'react-router-dom'
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
      <h2 className="title">RecipeBook</h2>
      {!! user && <button className="button logout" onClick={logoutUser}>Logout</button>}
    </div>
  )
}

export default Header
