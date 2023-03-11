import Car from '../models/Car.js';

// GET list of cars
export const getCars = async (req, res) => {
    try{
        const cars = await Car.find();
        // 201 successful get
        res.status(201).json(cars)
    }catch(err){ 
        // 404 cannot find
        res.status(404).json({ message: err.message })
    }
}

// Get a car by Id
export const getCarById = async (req, res) => {
    try{
        const { id } = req.params;
        const car = await Car.findById(id).exec();
        res.status(201).json(car);
    } catch (err){
        res.status(404).json({ message: err.message });
    }
}

// ADD new car
export const createCar = async (req, res) => {
    try {
        const carId = req.params;
        // get user input value from request body (frontend)
        const {
            make,
            model,
            carPackage,
            color,
            year,
            category,
            mileage,
            price
        } = req.body;

        // create new car object from request body
        const newCar = new Car({
            make,
            model,
            carPackage,
            color,
            year,
            category,
            mileage,
            price,
            _id: carId
        })
        // save new car object to mongo
        await newCar.save();

        // grab all cars so frontend gets updated with the new car added
        const cars = await Car.find();
        // 200 request success
        res.status(200).json(cars);
    } catch(err){
        // 409 create error
        res.status(409).json({ message: err.message })
    }
};
