
// import Display from './ApiContext/Display';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LastCompo from './CleanupUseEffect/CleanUseEffect';
import Claen from './CleanupUseEffect/Claen';
// import LastCompo from './CleanupUseEffect/CleanUseEffect';
// import ControlledComp from './ControlCompo';
// import ControlForm from './ControlForm/ControlForm';
// import ControlFrom from './ControlForm/ControlForm';
// import UncontrolForms from './ControlForm/UncotrolForm';
// import USEREFCompo from './USEREFCompo';
// import UncontrolledForms from './UnControlCompo';
// import UseRef from './UseRef';
// import AxiosApiCalling from './Axios/Axios';
// import ClassProps from './ClassProps/ClassProps';
// import DisplayCompo from './ConditionalRendering/DisplayCompo';
// import Example from './conditionR/ConditionR';
// import Lifecycle from './LifeCycle/Lifecycle';
// import ClassProps from './ClassProps/ClassProps';
// import MainContext from './ContextApi/MainContext';
// import SecondContext from './ContextApi/SecondContext';
// import ThirdContext from './ContextApi/ThirdContext';
// import ParentCompo from './FunctionProps/ParentCompo';
// import Main from './HOC/Main';
// import OnClick from './HOC/OnClick';
// import OnMouseHover from './HOC/OnMouseHover';
// import Higher from './HOC/Higher';
// import ParentCompo from './FunctionProps/ParentCompo';
// import A from './PropDriling/A';
// import ParentState from './StateUpLifting/ParentState';

function App() {
  return (
    <div className="App">
      {/* <h1>FunctionProps</h1> */}
      {/* <ParentCompo/> */}
      {/* <ParentCompo/> */}
      {/* <hr></hr> */}
      {/* <h1>ClassProps</h1> */}
      {/* <ClassProps/> */}
      {/* <hr></hr> */}
      {/* <h1>PropsDrilling</h1> */}
      {/* <A/> */}
      {/* <hr></hr> */}
      {/* <h1>StateUplifting</h1> */}
      {/* <ParentState/> */}
      {/* <hr></hr> */}
      {/* <h1>Hoc</h1> */}
      {/* <Higher/> */}
      {/* <Main/> */}
      {/* <OnClick/> */}
      {/* <OnMouseHover/> */}
      {/* <hr></hr> */}
      {/* <h1>Context Api</h1> */}
      {/* <MainContext/> */}
      {/* <SecondContext/> */}
      {/* <ThirdContext/> */}
      {/* <Display/> */}
      {/* <Lifecycle/> */}
      {/* <DisplayCompo/> */}
      {/* <br></br> */}
      {/* <Example/> */}
      {/* <ClassProps/> */}
      {/* <AxiosApiCalling/> */}
      {/* <UseRef/> */}
      {/* <USEREFCompo/> */}
      {/* <UncontrolledForms/> */}
      {/* <h1>ControlledComp</h1> */}
      {/* <ControlledComp/> */}
      {/* <br></br> */}
      {/* <ControlFrom/> */}
      {/* <ControlForm/> */}
      {/* <br></br> */}
      {/* <h2>UncontrolForms</h2> */}
      {/* <UncontrolForms/> */}
      {/* <LastCompo/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LastCompo/>}/>
        <Route path='/about' element={<Claen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
