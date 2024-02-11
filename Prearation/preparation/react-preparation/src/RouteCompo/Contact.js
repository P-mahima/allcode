import React from 'react'
import RouterLink from '../RouterLink'
import { Link, useLocation } from 'react-router-dom'

const Contact = () => {
  const data = useLocation();
  
  return (
      <div>
        <RouterLink/>
        Contact
        <p>WebWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen …</p>
        <Link to='/Student'>Student</Link>
        </div>
  )
}

export default Contact
