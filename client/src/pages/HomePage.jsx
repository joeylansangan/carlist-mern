import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form.jsx';
import api from '../api/cars';

const HomePage = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

    const handleAddCar = (data) => {
        setCars(data)
    };

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
            My Collection
        </h2>
        {cars?.map((car) => (
            <div 
                key={car._id}
                onClick={() => navigate(`/cars/${car._id}`)}
            >
                <span>{car.year} {car.make} {car.model}</span>
            </div>
        ))}
        <div>
            <Form updateCars={handleAddCar}/>
        </div>
    </div>
  )
}

export default HomePage