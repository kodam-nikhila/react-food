import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Shopping } from './components/Shopping';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='Shopping' element={<Shopping></Shopping>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
