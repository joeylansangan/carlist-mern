import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Snackbar,
  Alert,
} from "@mui/material";

import { useParams } from "react-router-dom";
import api from "../api/cars.js";

const CarPage = () => {
  const { carId } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await api.get(`/cars/${carId}`);
        setCar(response.data);
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
    fetchCar();
  }, []);
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        At a Glance
      </Typography>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
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
              alt={car?.model}
              src={car?.imgUrl}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h2">
              {car?.year} {car?.make} {car?.model} {car?.carPackage}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3 }}>
              {car?.color}
            </Typography>

            <Typography variant="h5">
              {(car?.price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
            <Typography variant="subtitle2" sx={{ mb: 3 }}>
              {car?.mileage?.toLocaleString()} mi.
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3 }}>
              Id: {car?._id}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{mb: 5}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 5, s: 10, md: 15 },
            py: 3,
            gap: {xs: 2, md: 5, lg: 20}
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" }}}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Stay Connected
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              risus sit amet nibh tempor sagittis sit amet at urna. Vestibulum
              venenatis libero id posuere suscipit.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", md: "70%" },
              
            }}
          >
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "100%",
              }}
              alt="car-bluetooth"
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 5, s: 10, md: 15 },
            py: 3,
            gap: {xs: 2, md: 5, lg: 20}
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", md: "70%" },
              
            }}
          >
            <Box
              component="img"
              sx={{
                height: "auto",
                width: "100%",
              }}
              alt="car-trunk"
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop"
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" }, }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Room for Adventure
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              risus sit amet nibh tempor sagittis sit amet at urna. Vestibulum
              venenatis libero id posuere suscipit.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default CarPage;
