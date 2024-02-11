import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Conatct</Link>
    </div>
  )
}

export default NavLink
