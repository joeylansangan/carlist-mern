import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../api/cars';
import * as yup from 'yup';

const Form = ({updateCars}) => {
  const category = ['Sedan', 'Coupe', 'SUV', 'Truck', 'Minivan', 'Hatchback', 'Station Wagon', 'Other']
  const currentYear = new Date().getFullYear();
  
  const schema = yup.object().shape({
    id: yup.string().required(),
    make: yup.string().required(),
    model: yup.string().required(),
    carPackage: yup.string().required(),
    color: yup.string().required(),
    year: yup.number().positive().integer().max(currentYear + 1).required(),
    category: yup.string().required(),
    mileage: yup.number().positive().integer().required(),
    price: yup.number().positive().required(),
  })

  const { register, handleSubmit, reset, formState: {errors, isSubmitSuccessful} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try{
      const response = await api.post(`/cars/${data.id}`, data);
      updateCars(response.data);
    } catch (err){
        if (err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
  };

  useEffect(() => {
    if(isSubmitSuccessful){
      reset({
        id: '',
        make: '',
        model: '',
        carPackage: '',
        color: '',
        year: '',
        category: '',
        mileage: '',
        price: ''
      })
    }
  },[isSubmitSuccessful, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Id</label>
      <input type="text" {...register("id")}/>
      <p>{errors.id?.message}</p>
      <label>Make</label>
      <input type="text" {...register("make")}/>
      <p>{errors.make?.message}</p>
      <label>Model</label>
      <input type="text" {...register("model")}/>
      <p>{errors.model?.message}</p>
      <label>Package</label>
      <input type="text" {...register("carPackage")}/>
      <p>{errors.package?.message}</p>
      <label>Color</label>
      <input type="text" {...register("color")}/>
      <p>{errors.color?.message}</p>
      <label>Year</label>
      <input type="number" {...register("year")}/>
      <p>{errors.year?.message}</p>
      <label>Category</label>
      <select type="text" {...register("category")}>
        {category.map((type, idx) => (
          <option key={idx}>{type}</option>
        ))}
      </select>
      <p>{errors.category?.message}</p>
      <label>Mileage</label>
      <input type="number" {...register("mileage")}/>
      <p>{errors.mileage?.message}</p>
      <label>Price</label>
      <input type="number" {...register("price")}/>
      <p>{errors.price?.message}</p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form