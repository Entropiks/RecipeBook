import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-wrapper">
      <h1>Welcome to FILMR</h1>
      <p>A place where you can find a filmer or be a filmer and get paid</p>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button >
        <Link to="/signup">Sign Up</Link>
      </button>
    </div>
  )
}

export default Home
