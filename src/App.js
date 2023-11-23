import './App.css';

import SimpleInterest from './components/simpleInterest';
import Nav from './components/Navbar';
import CompoundInterest from './components/CompoundInterest';
import {Router,Routes, Route, useNavigate, Link } from 'react-router-dom';
import HomePage from './components/home';
function App() {
 
 
  return (                                                                                                                                                                       
    <div className="App">

      <Nav/>
      
     
      <Routes className="route">
      <Route path='/' element={<HomePage />}/>
      <Route path='/simple' element={<SimpleInterest />} />
      <Route path='/compound' element={<CompoundInterest />} />
      </Routes>
    </div>
  );
}

export default App;
