import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/dynamic/one'>One</Link>
      <Link to='/dynamic/two'>Two</Link>
      <Link to='/dynamic/three'>Three</Link>
    </div>
  )
}

export default Home
