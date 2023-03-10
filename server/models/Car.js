import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
    {
        make: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        model: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        carPackage: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        color: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        year: {
            type: Number,
            required: true,
            min: 4,
            max: 2050,
        },
        category: {
            type: String,
            required: true,
            min: 2,
            max: 20,
        },
        mileage: {
            type: Number,
            required: true,
            min: 1,
            max: 1000000
        },
        price: {
            type: Number,
            required: true,
            min: 1,
            max: 999999999
        },
        _id: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        }
    },
    { timeStamps: true }
);

const Car = mongoose.model("Car", CarSchema);

export default Car;