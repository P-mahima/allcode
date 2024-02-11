import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import Error from './component/Error';
// import Cake from './component/Cake';
// import CakeType from './component/CakeType';
// import User from './component/User';
// import A from './UseContext/A';
import DataStore from './ContextApi.js/DataStore';
// import CounterCompo from './Optimization/CounterCompo';
// import UseCallback from './Optimization/UseCallback';
// import Parentcompo from './StateUplifting/Parentcompo';
import LastCompo from './CleanupWithUseEffect/LastCompo';
import Clean from './CleanupWithUseEffect/Clean';
// import Hometwo from './GenericCompo/Hometwo';
// import Genericcompo from './GenericCompo/Genericcompo';


function App() {
  return (
    <div className="App">
    <Routes>
      {/* <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Cake" element={<Cake/>} />
      <Route path="/Cake/:name" element={<CakeType/>} />
      <Route path='User/:namee' element={<User/>}/> */}
      {/* <Route path="*" element={<Error/>} />   */}
      {/* //in case path is not correct in that case this error file will called */}
    <Route  path= '/' element={<LastCompo/>}/>
    <Route  path= '/clean' element={<Clean/>}/>
    </Routes>
    
        {/* <A/> */}
       {/* <hr></hr> */}
       <h1>ContextApi, createContext Hook</h1>
    <DataStore/>
    <hr></hr>
    {/* <h1>useMemo Hook</h1> */}
    {/* <CounterCompo/> */}
    {/* <hr></hr> */}
    {/* <h1>UseCallback hook</h1> */}
    {/* <UseCallback/> */}
    {/* <hr></hr>  */}
    {/* <Parentcompo/> */}
    <LastCompo/>
    




    {/* <Genericcompo/> */}
    {/* <Hometwo/> */}
    </div>
  );
}

export default App;
