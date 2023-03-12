import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/cars.js';

const CarPage = () => {
    const { carId } = useParams();
    const [car, setCar] = useState({})
    useEffect(() => {
        const fetchCar = async () => {
            try{
                const response = await api.get(`/cars/${carId}`);
                setCar(response.data);
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
        fetchCar();
    },[]);
  return (
    <div>
        <span>Make: {car.make} </span>
        <span>Id: {car._id} </span>
    </div>
  )
}

export default CarPage