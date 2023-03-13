import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
} from "@mui/material";

import api from "../api/cars";
import * as yup from "yup";

const Form = ({ addCar, closeForm, updateSnack }) => {
  const selectStyle = {
    width: "100%",
    fontFamily: "Montserrat, sans-serif",
    padding: "10px 5px",
    marginTop: "10px",
  };

  const categoryArr = [
    "",
    "Sedan",
    "Coupe",
    "SUV",
    "Truck",
    "Minivan",
    "Hatchback",
    "Station Wagon",
    "Other",
  ];

  const currentYear = new Date().getFullYear();

  const schema = yup.object().shape({
    id: yup.string().required(),
    make: yup.string().required(),
    model: yup.string().required(),
    carPackage: yup.string().required(),
    color: yup.string().required(),
    year: yup
      .number()
      .positive()
      .integer()
      .max(currentYear + 1)
      .required(),
    category: yup.string().required(),
    mileage: yup.number().positive().integer().required(),
    price: yup.number().positive().required(),
    imgUrl: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(data) => {
    try {
      const response = await api.post(`/cars/${data.id}`, data);
      addCar(response.data);
      updateSnack('success', 'Successfully added your car to the collection!', false)
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        updateSnack('error', err.response.data.message, true)
      } else {
        console.log(`error: ${err.message}`);
        updateSnack('error', err.message.message, true)
      }
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        id: "",
        make: "",
        model: "",
        carPackage: "",
        color: "",
        year: "",
        category: "",
        mileage: "",
        price: "",
        imgUrl: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <DialogContent>
        <DialogTitle>Add new car</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill up required fields below to add a new car to your collection.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Id"
            type="text"
            fullWidth
            variant="standard"
            {...register("id")}
            error={errors.id}
            helperText={errors.id?.message}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Make"
            type="text"
            fullWidth
            variant="standard"
            {...register("make")}
            error={errors.make}
            helperText={errors.make?.message}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            {...register("model")}
            error={errors.model}
            helperText={errors.model?.message}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Package"
            type="text"
            fullWidth
            variant="standard"
            {...register("carPackage")}
            error={errors.carPackage}
            helperText={errors.carPackage?.message}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            {...register("color")}
            error={errors.color}
            helperText={errors.color?.message}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Year"
            type="number"
            fullWidth
            variant="standard"
            {...register("year")}
            error={errors.year}
            helperText={errors.year?.message}
          />
          <InputLabel sx={{ mt: 3 }}>Category</InputLabel>
          <select style={selectStyle} type="text" {...register("category")}>
            {categoryArr.map((type, idx) => (
              <option key={idx}>{type}</option>
            ))}
          </select>
          <p
            style={{
              color: "red",
              fontSize: "small",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {errors.category?.message}
          </p>
          <TextField
            autoFocus
            margin="dense"
            label="Mileage"
            type="number"
            fullWidth
            variant="standard"
            {...register("mileage")}
            error={errors.mileage}
            helperText={errors.mileage?.message}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Price (cents)"
            type="number"
            fullWidth
            variant="standard"
            {...register("price")}
            error={errors.price}
            helperText={errors.price?.message}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Image URL"
            type="string"
            fullWidth
            variant="standard"
            {...register("imgUrl")}
            error={errors.imgUrl}
            helperText={errors.imgUrl?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeForm()}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default Form;
