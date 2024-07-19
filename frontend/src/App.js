import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='dashboard' element={<Dashboard/>} />
      </Routes>

    </div>
  );
}

export default App;
