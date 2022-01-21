// import logo from './logo.svg';
import 'rsuite/dist/rsuite.min.css';
import {CustomProvider} from 'rsuite';
// import 'rsuite/styles/colors/dark.less'
import './App.css';
import  InputTask from './Components/InputTask';
// import {tasksList} from './Components/InputTask';
// import  TaskList from './Components/TaskList';


function App() {
  return (
    <CustomProvider theme = 'dark'>
    <div className="App">
      <InputTask></InputTask>
      {/* <TaskList tasks = {tasksList}></TaskList> */}
    </div>
    </CustomProvider>
  );
}

export default App;
