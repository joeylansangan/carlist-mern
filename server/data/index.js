import mongoose from "mongoose";

const carIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId()
];

export const cars = [
    {
        make: "Ford",
        model: "F10",
        carPackage: "Base",
        color: 'Silver',
        year: 2010,
        category: "Truck",
        mileage: 120123,
        price: 1999900,
        _id: carIds[0]
    },
    {
        make: "Toyota",
        model: "Camry",
        carPackage: "SE",
        color: "White",
        year: 2019,
        category: "Sedan",
        mileage: 3999,
        price: 2899900,
        _id: carIds[1]
    }
]