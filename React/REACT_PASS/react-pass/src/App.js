
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Link from './Link';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link/>
      <NavBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
