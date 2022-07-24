
import './App.css';
import Homepage from './Components/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Workspace from './Components/Workspace';
import {Routes,Route} from "react-router-dom"
import Integration from './Components/Integration';
import  Blog  from './Components/Blog';

function App() {
  return (
    <div className="App">
      {/* <Workspace/> */}
      {/* <DrawerExample/> */}
      {/* <Integration/> */}
      {/* <Blog/> */}
      
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/workspace' element={<Workspace />} />
      <Route path='/integration' element={<Integration />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
    </div>
  );
}

export default App;
