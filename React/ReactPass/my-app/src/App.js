// 
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CleanupFunc from './CleanUpUseEffect/CleanupFunc';
// import NewClean from './CleanUpUseEffect/NewClean';
import ClassParent from './PassDataFromParentToChild/ClassComponent/ClassParent';
import FunctionParent from './PassDataFromParentToChild/FunctionComponent/FunctionParent';
import Display from './CondtionalRerendering/Display';
import Fetch from './FetchingData/Fetch';
import Axios from './FetchingData/Axios';
import LifeCycle from './ReactLifeCycle/LifeCycle';
import A from './PropsDriling/A';
import DisplayContext from './ContextApi/DisplayContext';
import Preentstate from './StateUplift/Preentstate';
import HigherParent from './HOC/HigherParent';
import HigherOne from './HOC/HigherOne';
import HigherTwo from './HOC/HigherTwo';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseEffectFunc from './Hooks/UseEffectClean/UseEffectFunc';
import Clean from './Hooks/UseEffectClean/Clean';
import UseReducer from './Hooks/UseReducer';
import UseMemo from './Hooks/UseMemo';
import UnControlledCompo from './Hooks/UseRef=UncontrolledCompo/UnControlledCompo';
import DisplayCall from './Hooks/UseCallBack/DisplayCall';
import ControlCompo from './ControlCompo.js/ControlCompo';
import Uncontrolled from './ControlCompo.js/Uncontrolled';



function App() {
  return (
    <div className="App">
   {/* <BrowserRouter>
   <Routes>
    <Route path='/' element={<CleanupFunc/>}/>
 
    <Route path='/about' element={<NewClean/>}/>
   </Routes>
   </BrowserRouter> */}

   <h1>Class props</h1>
   <ClassParent/>
   <h1>Function props</h1>
   <FunctionParent/>
   <h1>Conditional Rendering</h1>
   <Display/>
    <h1>Fetch data</h1>
    <h2>Fetch</h2>
    <Fetch/>
    <h2>Axios</h2>
    <Axios/>
    <h1>React LifeCycle</h1>
    <LifeCycle/>
    <h1>PropsDriling</h1>
    <A/>
    <h1>ContextApi</h1>
    <DisplayContext/>
    <h1>StateUpLifiting</h1>
    <Preentstate/>
    <h1>HOC</h1>
    <HigherParent/>
    <HigherOne/>
    <HigherTwo/>
    <h1>Hooks</h1>
    <h2>UseState</h2>
    <UseState/>
    <h2>UseEffect</h2>
    <UseEffect/>
    <h2>UseReducer</h2>
    <UseReducer/>
    <h2>UseMemo</h2>
    <UseMemo/>
    <h2>UseREf / UnControlledCompo</h2>
    <UnControlledCompo/>
    <h2>UseCallback</h2>
    <DisplayCall/>
    <h2>ControlCompo</h2>
    <ControlCompo/>
    <Uncontrolled/>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UseEffectFunc/>}/>
      <Route path='/about' element={<Clean/>} />
    </Routes>
    </BrowserRouter>

    {/* <h1></h1> */}



    </div>
  );
}

export default App;
