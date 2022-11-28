import React from 'react';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import Edit from './components/Edit';
import Userdata from './components/Userdata';
import { BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="Apps">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="userdata" element={<Userdata />} />
          <Route path="edit/:id" element={<Edit />} />          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
