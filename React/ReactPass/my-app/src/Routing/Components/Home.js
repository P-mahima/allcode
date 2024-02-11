import React from 'react'
import { Link} from 'react-router-dom'
import NavLink from '../NavLink'

const Home = () => {
  return (
    <div>
        <NavLink/>
        <h1>Home</h1>
       <Link to='/dynamic/one1'> One</Link>
       <Link to='/dynamic/one2'> Two</Link>
       <Link to='/dynamic/one3'> Three</Link>
    


    </div>
  )
}

export default Home