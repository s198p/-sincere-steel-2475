
import './App.css';
import Homepage from './Components/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Workspace from './Components/Workspace';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/workspace' element={<Workspace />} />
    </Routes>
    </div>
  );
}

export default App;
