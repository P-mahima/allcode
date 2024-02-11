import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Comopnent/Home'
import About from '../Comopnent/About'
import Contact from '../Comopnent/Contact'
import RouteDyCompo from './RouteDyCompo'

const Routecompo = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/dynamic/:one' element={<RouteDyCompo/>} />
        </Routes>
    </div>
  )
}

export default Routecompo