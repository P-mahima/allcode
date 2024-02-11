import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to= 'dynamic/one1'>
        <h1>One</h1>
        </Link>
        <Link to= 'dynamic/one2'>
        <h1>Two</h1>
        </Link>
        <Link to= 'dynamic/one3'>
        <h1>Three</h1>
        </Link>
    </div>
  )
}

export default Home