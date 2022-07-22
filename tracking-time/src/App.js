
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Registration from './Components/Registration';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
      {/* <Registration/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
