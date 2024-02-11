import React from 'react'
import Home from './RouteCompo/Home'
import Contact from './RouteCompo/Contact'
import Student from './RouteCompo/Student'
import {Routes, Route, BrowserRouter }from 'react-router-dom'
// import DY from './DY'
import Routeinfo from './Routeinfo'

const RouteCompoR = () => {
  return (
    <div>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Student' element={<Student/>} />
        <Route path='/Dynamic/:student' element={<Routeinfo/>} />
       </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouteCompoR