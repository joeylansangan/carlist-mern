import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  Paper,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import Form from "../components/Form.jsx";
import api from "../api/cars";

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [snack, setSnack] = useState(false);
  const [snackStatus, setSnackStatus] = useState('');
  const [snackMessage, setSnackMessage] = useState('');

  const navigate = useNavigate();

  const handleAddCar = (data) => {
    setCars(data);
  };
  
  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleSnack = (severity, message, bool) => {
    setSnack(true);
    setSnackStatus(severity);
    setSnackMessage(message);
    setOpenForm(bool);
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchCars();
  }, []);

  return (
    <Container
      sx={{
        p: 5,
      }}
    >
      <Typography variant="h4" sx={{ mb: 5 }}>
        My Collection
      </Typography>
      <Grid container spacing={2}>
        {cars?.map((car) => {
          let dollarPrice = (car.price / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          return (
            <Grid key={car._id} item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: { xs: "100%", md: "70%" },
                    pr: { xs: 0, md: 2 },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "auto",
                      width: "100%",
                    }}
                    alt={car.model}
                    src={car.imgUrl}
                  />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Typography variant="h3">
                    {car.year} {car.make} {car.model} {car.carPackage}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 3 }}>
                    {car.color}
                  </Typography>
                  <Typography variant="h5">{dollarPrice}</Typography>
                  <Typography variant="subtitle2" sx={{ mb: 3 }}>
                    {car.mileage.toLocaleString()} mi.
                  </Typography>

                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/cars/${car._id}`)}
                  >
                    Learn More
                  </Button>
                </Box>
              </Paper>
            </Grid>
          );
        })}
        <Grid item xs={12} sm={3}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              p: 3,
              ":hover": {
                filter: "brightness(0.95)",
                cursor: "pointer",
              },
            }}
            onClick={() => setOpenForm(true)}
          >
            <Typography
              sx={{
                fontWeight: "900",
                color: "gray",
                fontSize: "5rem",
                mr: 2,
              }}
            >
              +
            </Typography>
            <Typography variant="subtitle2">
              Add new car to collection
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={openForm}>
        <Form 
            addCar={handleAddCar} 
            closeForm={handleCloseForm} 
            updateSnack={handleSnack}
            />
      </Dialog>
      <Snackbar open={snack} autoHideDuration={6000} onClose={() => setSnack(false)}>
        <Alert severity={snackStatus} sx={{ width: "100%" }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default HomePage;
