import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Rounting/Home'
import About from './Rounting/About'
import Contact from './Rounting/Contact'
import Routeinfo from './Rounting/Routeinfo';
function NavBar() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Dynamic/:student' element={<Routeinfo/>}/>
      </Routes>
    </div>
  );
}

export default NavBar;
