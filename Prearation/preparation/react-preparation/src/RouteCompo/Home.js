import React from 'react'
import RouterLink from '../RouterLink'
import { Link } from 'react-router-dom'
import '../App.css';

const Home = () => {
    return (
        <div>
            <RouterLink />
            Home
            <div className='list'>
                <Link className='list-item'  to='/Dynamic/one'>one</Link>
                <Link className='list-item'  to='/Dynamic/two'>two</Link>
                <Link className='list-item' to='/Dynamic/three'>Three</Link>
                <Link className='list-item'  to='/Dynamic/four'>Four</Link>
                <Link  className='list-item' to='/Dynamic/five'>Five</Link>
                <Link  className='list-item' to='/Dynamic/six'>Six</Link>
                <Link  className='list-item' to='/Dynamic/seven'>Seven</Link>
            </div>
        </div>
    )
}

export default Home