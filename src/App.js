import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <div >
      <BrowserRouter>
      {/* <Header /> */}
    <div className="">
      
      <Routes>
        <Route exact path="/" Component={Home} />
  
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={Signup} />
      

      </Routes>
      </div>
      </BrowserRouter>
     
      
    
    </div>
  );
}

export default App;
