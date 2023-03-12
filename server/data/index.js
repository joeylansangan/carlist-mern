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
        imgUrl: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/14891/2021-Ford-F150%20SuperCrew%20Cab-front_14891_032_2400x1800_YZ.png",
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
        imgUrl: "https://www.motortrend.com/uploads/sites/10/2018/09/2019-toyota-camry-se-auto-sedan-angular-front.png",
        _id: carIds[1]
    }
]