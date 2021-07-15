import React from 'react'
import { logout } from '../firebase/auth'
import { useHistory } from 'react-router-dom'
import '../components/Header.css'

function Header() {
  const history = useHistory();

  // Handling user logout from auth.js
  const logoutUser = async () => {
    await logout();
    history.push('/signup');
  };

  return (
    <div className="header">
      <h2 className="title">RecipeBook</h2>
      <button className="button logout" onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Header
