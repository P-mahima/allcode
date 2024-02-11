import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Cake() {
  return (
    <div>
      <h1>CakeType</h1>
      <Link to='/Cake/Black'> <h2>Black</h2></Link>
      <Link to='/Cake/Red'> <h2>Red</h2></Link>

    </div>
    // <Link></Link>
  )
}

export default Cake



  // < li > <NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/'>Home</NavLink></ >
  //                               <li> <NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/why'>Why</NavLink></li>
  //                               <li><NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/how'>How</NavLink></li>
  //                               <li><NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/what'>What</NavLink></li>
  //                               <li></li>