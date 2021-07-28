import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-wrapper">
      <h1>Welcome to FILMR</h1>
      <p>A place where you can find a filmer or be the filmer</p>
      <button>Login</button>
      <button>
       <Link to="/signup">Sign Up</Link>
      </button>
     
    </div>
  )
}

export default Home
