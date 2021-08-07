import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-intro">
      <h1>Welcome to FILMR</h1>
      <p>A place where you can find a filmer or be a filmer and get paid</p>
      </div>
      <div className="button-wrapper">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
