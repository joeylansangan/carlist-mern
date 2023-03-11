import React, { useState, useEffect } from 'react';
import api from './api/cars';
import CarList from './components/CarList.jsx';

import './App.css'
const App = () => {
  const [cars, setCars] = useState([])
    useEffect(() => {
        const fetchCars = async () => {
            try{
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (err){
                if (err.response){
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
        fetchCars();
    },[]);

  return (
    <div>
      <h2>
        Carlist
      </h2>
      <CarList 
        data={cars}
      />
    </div>
  )
}

export default App