
import './App.css';
import Clickcounter from './HigherOrder/Clickcounter';
import HoverCounter from './HigherOrder/HoverCounter';
// import Purecom from './PureCompo/Purecom';
// import Clickcounter from './HigherOrder/Clickcounter';
// import ClassParent from './Classprops/ClassParent';
// import FuncParentComp from './FunctinProps.js/FuncParentComp';
import Higheror from './HigherOrder/Higheror';
import Result from './HigherOrderCompo/Result';
import OnClick from './HigherOrderCompo/OnClick';
import OnHover from './HigherOrderCompo/OnHover';
function App() {
  return (
    <div className="App">
      {/* <FuncParentComp/> */}
      <hr></hr>
      {/* <ClassParent/> */}
      {/* <Purecom/> */}
      {/* <Clickcounter/> */}
      {/* <HoverCounter/> */}
      <Higheror/>
      <hr></hr>
      <Result/>
      <OnClick/>
      <OnHover/>
    </div>
  );
}

export default App;
