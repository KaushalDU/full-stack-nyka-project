import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Sidenave from './components/Sidenave.jsx';
import Content from './components/Content.jsx';
import { Signup } from './components/Signup.jsx';
import { Login } from './components/Login.jsx';
// import { Login } from './components/Login.jsx';
function App() {
  return (
    <div className="App">
    <h1>Nyka</h1>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* < Sidenave /> */}
      {/* <Content /> */}
    </div>
  );
}

export default App;
