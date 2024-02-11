import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const RouterLink = () => {
  return (
    <div className='list1'>
        
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Student'>Student</Link>
    </div>
  )
}

export default RouterLink