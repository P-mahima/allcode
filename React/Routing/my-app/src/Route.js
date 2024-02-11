import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
// import Contatc from './Component/Cont
import Contact from './Component/Contact'
import Routeinfo from './Routeinfo'

const RouteCompo = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path = '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>} />
        <Route path='/dynamic/:data' element={<Routeinfo/>}/>
      </Routes>
    </div>
  )
}

export default RouteCompo
