
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavLink from './NavLink';
// import Route from './Route';
import RouteCompo from './Route';
import DisplayData from './REDUX/DisplayData';
import Component from './LazyLoading/Component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavLink/>
      <RouteCompo/>
      </BrowserRouter>

      <DisplayData/>

      <Component/>
    </div>
  );
}

export default App;
