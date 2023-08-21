import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';

function App() {
  return (
   <Router> 
   <Routes>
    <Route path="/chat" element={<Home/>}></Route>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
   </Routes>
   
   </Router>
  // <><h1>gfghfjgfhgfhgjf</h1></>
  );
}

export default App;
