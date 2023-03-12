import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import CarPage from './pages/CarPage.jsx';

import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cars/:carId" element={<CarPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App